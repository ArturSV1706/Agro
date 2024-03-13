import Stripe from 'stripe';

export default defineEventHandler(async (event)=>{
    const body = await readBody(event)
    const test = body.email
    const stripe = new Stripe(process.env.STRIPE_SECRET)
    let subscription = ''
    let  session = ''
    let dataExpiracao = ''
    // return body


    const customers = await stripe.customers.search({
        query: `email:'${body.email}'`,
        expand: ['data.subscriptions'],
    });

    if (customers.data[0] != undefined) {
        session = await stripe.billingPortal.sessions.create({
            customer: customers.data[0].id,
            return_url: 'https://app.saffron.com.br',
        });

        // window.location.href = session.url;


        if (customers.data[0].subscriptions.data[0] != undefined) {

            subscription = await stripe.subscriptions.retrieve(
                customers.data[0].subscriptions.data[0].id
            );
            // Unix timestamp
            const unixTimestamp = subscription.current_period_end;

            // Convert Unix timestamp to milliseconds
            const milliseconds = unixTimestamp * 1000;

            // Create a new Date object
            const dateObject = new Date(milliseconds);

            // Get the individual components of the date
            const day = ("0" + dateObject.getDate()).slice(-2);
            const month = ("0" + (dateObject.getMonth() + 1)).slice(-2);
            const year = dateObject.getFullYear();

            // Format the date as dd-mm-yyyy
            dataExpiracao = `${day}-${month}-${year}`;

        }
    }
    


    return {
        subscription: subscription,
        session: session,
        dataExpiracao: dataExpiracao,
      };
    
})