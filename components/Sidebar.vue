<script setup>

</script>
<template>
    <div class=" group/main flex flex-col align-middle fixed z-20 w-[85px] sm:h-[90%] 2xl:h-[70%] ml-[15px] rounded-2xl bg-escuro top-1/2 transform -translate-y-1/2 transition-all
    hover:w-[230px] hover:justify-start hover:border-claro hover:border-[1px]">
        <div class="flex items-center justify-start mt-6 ml-[2px] ">
            <img src="../assets/icons/saffron.svg" alt="" class=" scale-[55%] max-w-[80px]">
            <h1 class="font-aristotelica font text-3xl text-claro hidden transition-all group-hover/main:block">Saffron
            </h1>
        </div>
        <ul class=" w-[100%]  h-[100%] flex flex-col justify-evenly items-center transition-all ease-in
                    group-hover/main:items-start group-hover/main:ml-[16px]">
            <li class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/" class="flex items-center  group-hover/main:w-full">

                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M25.5 19.5V6H42v13.5ZM6 25.5V6h16.5v19.5ZM25.5 42V22.5H42V42ZM6 42V28.5h16.5V42Zm3-19.5h10.5V9H9ZM28.5 39H39V25.5H28.5Zm0-22.5H39V9H28.5ZM9 39h10.5v-7.5H9Zm10.5-16.5Zm9-6Zm0 9Zm-9 6Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Painel</p>
                </NuxtLink>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/safras" class="flex items-center group-hover/main:w-full">

                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M22.5 41.5V26.05h-1q-3.2 0-6.025-1.225T10.45 21.35q-2.2-2.25-3.325-5.2T6 10V6h3.9q3.1 0 5.95 1.225t5.1 3.475q1.65 1.7 2.725 3.8 1.075 2.1 1.525 4.45.4-.6.85-1.15.45-.55.95-1.1 2.25-2.25 5.1-3.475Q34.95 12 38.1 12H42v4q0 3.2-1.2 6.15t-3.4 5.2q-2.25 2.25-5.075 3.45Q29.5 32 26.4 32h-.9v9.5Zm.05-18.5q0-3.05-1-5.675T18.8 12.85q-1.75-1.8-4.3-2.825Q11.95 9 9 9q0 3.15.925 5.775.925 2.625 2.675 4.475 2.1 2.25 4.525 3 2.425.75 5.425.75Zm2.95 6q3 0 5.55-.975t4.3-2.825q1.75-1.8 2.7-4.425Q39 18.15 39 15q-3 0-5.55 1.025t-4.3 2.825q-2.15 2.25-2.9 4.7T25.5 29Zm0 0Zm-2.95-6Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Safras</p>
                </NuxtLink>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/estoque" class="flex items-center group-hover/main:w-full">
                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M6 40.9V16.3q-.7-.1-1.35-1Q4 14.4 4 13.35V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v6.35q0 1.05-.65 1.95-.65.9-1.35 1v24.6q0 1.15-.925 2.125Q40.15 44 39 44H9q-1.2 0-2.1-.975Q6 42.05 6 40.9Zm3-24.55V41h30V16.35Zm32-3V7H7v6.35Zm-23 13.5h12v-3H18ZM9 41V16.35 41Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Estoque</p>
                </NuxtLink>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/tarefas" class="flex items-center group-hover/main:w-full">

                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q3.75 0 7 1.2t5.85 3.3l-2.15 2.15q-2.2-1.75-4.9-2.7Q27.1 7 24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41q7.25 0 12.125-4.875T41 24q0-1.5-.225-2.925-.225-1.425-.675-2.775l2.3-2.3q.8 1.85 1.2 3.85.4 2 .4 4.15 0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm-2.95-10.9-8.25-8.3 2.25-2.25 6 6 20.7-20.7 2.3 2.25Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Tarefas</p>
                </NuxtLink>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/financeiro" class="flex items-center group-hover/main:w-full">

                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M27 27q-2.5 0-4.25-1.75T21 21q0-2.5 1.75-4.25T27 15q2.5 0 4.25 1.75T33 21q0 2.5-1.75 4.25T27 27Zm-16 7q-1.25 0-2.125-.875T8 31V11q0-1.25.875-2.125T11 8h32q1.25 0 2.125.875T46 11v20q0 1.25-.875 2.125T43 34Zm5-3h22q0-2.1 1.45-3.55Q40.9 26 43 26V16q-2.1 0-3.55-1.45Q38 13.1 38 11H16q0 2.1-1.45 3.55Q13.1 16 11 16v10q2.1 0 3.55 1.45Q16 28.9 16 31Zm24 9H5q-1.25 0-2.125-.875T2 37V14h3v23h35Zm-29-9V11v20Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Financeiro</p>
                </NuxtLink>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/funcionarios" class="flex items-center group-hover/main:w-full">

                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M2.1 42v-4.6q0-1.7.8-2.825.8-1.125 2.25-1.825 2.7-1.3 5.775-2.15 3.075-.85 6.975-.85 3.9 0 6.975.85 3.075.85 5.775 2.15 1.45.7 2.25 1.825t.8 2.825V42Zm3-3h25.6v-1.6q0-.75-.425-1.225-.425-.475-1.025-.725-2.15-.95-4.8-1.825t-6.55-.875q-3.9 0-6.55.875t-4.8 1.825q-.6.25-1.025.725Q5.1 36.65 5.1 37.4Zm12.8-12.25q-3.3 0-5.4-2.15-2.1-2.15-2.1-5.35h-.5q-.4 0-.7-.3-.3-.3-.3-.7 0-.4.3-.7.3-.3.7-.3h.5q0-2 1-3.6t2.6-2.6V13q0 .3.225.525.225.225.525.225.35 0 .55-.225.2-.225.2-.525v-2.6q.4-.1 1.1-.175.7-.075 1.35-.075.65 0 1.35.075.7.075 1.1.175V13q0 .3.2.525.2.225.55.225.3 0 .525-.225.225-.225.225-.525v-1.95q1.6 1 2.55 2.6.95 1.6.95 3.6h.5q.4 0 .7.3.3.3.3.7 0 .4-.3.7-.3.3-.7.3h-.5q0 3.2-2.1 5.35-2.1 2.15-5.4 2.15Zm0-3q2.1 0 3.3-1.25 1.2-1.25 1.2-3.25h-9q0 2 1.2 3.25t3.3 1.25Zm15.1 6.2-.1-1.45q-.35-.2-.725-.45t-.675-.5l-1.3.7-1.1-1.6 1.3-.95q-.1-.2-.1-.375v-.75q0-.175.1-.375l-1.3-.95 1.1-1.6 1.3.7.7-.5q.35-.25.7-.45l.1-1.45h2l.1 1.45q.35.2.7.45l.7.5 1.3-.7 1.1 1.6-1.3.95q.1.2.1.375v.75q0 .175-.1.375l1.3.95-1.1 1.6-1.3-.7q-.3.25-.675.5-.375.25-.725.45l-.1 1.45Zm1-3.1q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35T34 23.05q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm4.4-7.75-.45-1.75q-.5-.2-1.025-.55-.525-.35-.875-.75l-2.2.8-1-1.75 1.75-1.4q-.1-.25-.175-.55-.075-.3-.075-.6t.075-.6q.075-.3.175-.55L32.85 10l1-1.75 2.2.8q.35-.4.875-.775t1.025-.525L38.4 6h1.9l.45 1.75q.5.15 1.025.525.525.375.875.775l2.2-.8 1 1.75-1.75 1.4q.1.25.175.55.075.3.075.6t-.075.6q-.075.3-.175.55l1.75 1.4-1 1.75-2.2-.8q-.35.4-.875.75t-1.025.55l-.45 1.75Zm.95-3.65q1.25 0 2.075-.825.825-.825.825-2.075 0-1.25-.825-2.075-.825-.825-2.075-.825-1.25 0-2.075.825-.825.825-.825 2.075 0 1.25.825 2.075.825.825 2.075.825ZM5.1 39h25.6H5.1Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Funcionários</p>
                </NuxtLink>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <NuxtLink to="/maquinas" class="flex items-center group-hover/main:w-full">

                    <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                        xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                        <path
                            d="M7.25 18.05q-.55 0-.95-.45-.4-.45-.4-1.05 0-.6.4-1.05.4-.45.95-.45h7.45q1.45 0 2.25.9t1.05 2.1ZM11.4 40q-3.95 0-6.675-2.775Q2 34.45 2 30.5q0-3.95 2.775-6.725Q7.55 21 11.5 21q1.6 0 3.2.55t2.9 1.65h3.45q2.1 0 3.525-1.475Q26 20.25 26 18.15v-5.2l-2.45-2.4-3.05 3.05-.95-.9 7.1-7.1.9.9-3.1 3.1 2.45 2.45h13.6q1.3 0 2.15.85.85.85.85 2.15V28q1.15 1 1.825 2.35t.675 2.9q0 2.8-1.975 4.775Q42.05 40 39.25 40q-2.8 0-4.775-1.975Q32.5 36.05 32.5 33.4q0-.3.025-.725T32.6 32H20.9q-.55 3.45-3.2 5.725Q15.05 40 11.4 40Zm.1-3q2.7 0 4.6-1.9 1.9-1.9 1.9-4.6 0-2.7-1.9-4.6-1.9-1.9-4.6-1.9-2.7 0-4.6 1.9Q5 27.8 5 30.5q0 2.7 1.9 4.6Q8.8 37 11.5 37ZM35 23.5ZM39.25 37q1.55 0 2.65-1.1 1.1-1.1 1.1-2.65 0-1.55-1.1-2.65-1.1-1.1-2.65-1.1-1.55 0-2.65 1.1-1.1 1.1-1.1 2.65 0 1.55 1.1 2.65 1.1 1.1 2.65 1.1ZM11.5 34q-1.45 0-2.475-1.025Q8 31.95 8 30.5q0-1.45 1.025-2.475Q10.05 27 11.5 27q1.45 0 2.475 1.025Q15 29.05 15 30.5q0 1.45-1.025 2.475Q12.95 34 11.5 34Zm9.4-5.05h13.15q.9-1.1 2.325-1.775Q37.8 26.5 39.4 26.5h1.1V15.05H29v3.1q0 3.25-2.35 5.65-2.35 2.4-5.6 2.4H20q.25.5.5 1.225.25.725.4 1.525Z" />
                    </svg>
                    <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Máquinas</p>
                </NuxtLink>
            </li>
            <li>
                <!-- Espaço vazio -->
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                    xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path
                        d="M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-1.75-7.3h2.95q0-1.3.325-2.375T27.75 23.5q1.55-1.3 2.2-2.55.65-1.25.65-2.75 0-2.65-1.725-4.25t-4.575-1.6q-2.45 0-4.325 1.225T17.25 16.95l2.65 1q.55-1.4 1.65-2.175 1.1-.775 2.6-.775 1.7 0 2.75.925t1.05 2.375q0 1.1-.65 2.075-.65.975-1.9 2.025-1.5 1.3-2.225 2.575-.725 1.275-.725 3.375ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z" />
                </svg>
                <p class="text-verde hidden font-bold transition-all
                            group-hover/main:block group-hover:text-claro">Ajuda</p>
            </li>
            <li id="test" class="group flex items-center justify-evenly w-[80%] transition-all cursor-pointer
                     hover:bg-verde rounded-xl group-hover/main:justify-start">
                <svg class="sm:scale-[35%] 2xl:scale-[45%] transition-all fill-verde group-hover:fill-claro"
                    xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                    <path
                        d="M11.1 35.25q3.15-2.2 6.25-3.375Q20.45 30.7 24 30.7q3.55 0 6.675 1.175t6.275 3.375q2.2-2.7 3.125-5.45Q41 27.05 41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 3.05.95 5.8t3.15 5.45ZM24 25.5q-2.9 0-4.875-1.975T17.15 18.65q0-2.9 1.975-4.875T24 11.8q2.9 0 4.875 1.975t1.975 4.875q0 2.9-1.975 4.875T24 25.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.775t4.3-6.35q2.725-2.725 6.375-4.3Q19.9 4 24 4q4.15 0 7.775 1.575t6.35 4.3q2.725 2.725 4.3 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.3 6.375-2.725 2.725-6.35 4.3Q28.15 44 24 44Zm0-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75-2.65-.95-5.35-.95-2.7 0-5.35.95-2.65.95-5.2 2.75 2.55 2 5.175 2.8Q21.25 41 24 41Zm0-18.5q1.7 0 2.775-1.075t1.075-2.775q0-1.7-1.075-2.775T24 14.8q-1.7 0-2.775 1.075T20.15 18.65q0 1.7 1.075 2.775T24 22.5Zm0-3.85Zm0 18.7Z" />
                </svg>
                <p class="text-verde hidden font-bold transition-all whitespace-nowrap 
                            group-hover/main:block group-hover:text-claro">Minha Conta</p>
            </li>

        </ul>
    </div>
</template>