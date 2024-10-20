const purchaseEmail = (
  itemName: string[],
  username: string,
  orderId: string,
  useremail: string,
  orderDate: Date,
  actualPrice: number[],
  discount: number[],
  currentPrice: number[],
  invoiceID: string,
  totalPrice: number
) => {
  return `
        <html lang="en">
   <head> 
      <style>
         .capitalize {
         text-transform: capitalize;
         }
         .bg-gray-50 {
         background-color: #f9fafb;
         }
         .bg-white {
         background-color: #ffffff;
         }
         .px-6 {
         padding-left: 1.5rem;
         padding-right: 1.5rem;
         }
         .py-4 {
         padding-top: 1rem;
         padding-bottom: 1rem;
         }
         .md:px-16 {
         padding-left: 4rem;
         padding-right: 4rem;
         }
         .md:py-12 {
         padding-top: 3rem;
         padding-bottom: 3rem;
         }
         .flex {
         display: flex;
         }
         .flex-col {
         flex-direction: column;
         }
         .gap-8 {
         gap: 2rem;
         }
         .bg-green-100 {
         background-color: #d1fae5;
         }
         .rounded-lg {
         border-radius: 0.5rem;
         }
         .mb-4 {
         margin-bottom: 1rem;
         }
         .font-semibold {
         font-weight: 600;
         }
         .text-lg {
         font-size: 1.125rem;
         line-height: 1.75rem;
         }
         .text-slate-600 {
         color: #64748b;
         }
         .text-slate-900 {
         color: #0f172a;
         }
         .gap-4 {
         gap: 1rem;
         }
         .gap-6 {
         gap: 1.5rem;
         }
         .invert-\[0.6\] {
         filter: invert(0.6);
         }
         .justify-start {
         justify-content: flex-start;
         }
         .items-center {
         align-items: center;
         }
         .bg-rose-50 {
         background-color: #fff1f2;
         }
         .py-8 {
         padding-top: 2rem;
         padding-bottom: 2rem;
         }
         .gap-2 {
         gap: 0.5rem;
         }
         .justify-center {
         justify-content: center;
         }
         .text-4xl {
         font-size: 2.25rem;
         line-height: 2.5rem;
         }
         .font-bold {
         font-weight: 700;
         }
         .text-slate-800 {
         color: #1e293b;
         }
         .text-lg {
         font-size: 1.125rem;
         }
         .grid {
         display: grid;
         }
         .grid-cols-2 {
         grid-template-columns: repeat(2, minmax(0, 1fr));
         }
         .mt-2 {
         margin-top: 0.5rem;
         }
         .uppercase {
         text-transform: uppercase;
         }
         .break-all {
         word-break: break-all;
         }
         .normal-case {
         text-transform: none;
         }
         .text-blue-600 {
         color: #2563eb;
         }
         .text-slate-400 {
         color: #94a3b8;
         }
         .text-center {
         text-align: center;
         }
         .font-semibold {
         font-weight: 600;
         }
         .bg-rose-50 {
         background-color: #fff1f2;
         }
         .py-2 {
         padding-top: 0.5rem;
         padding-bottom: 0.5rem;
         }
         .px-4 {
         padding-left: 1rem;
         padding-right: 1rem;
         }
         .justify-between {
         justify-content: space-between;
         }
         .p-4 {
         padding: 1rem;
         }
         .gap-4 {
         gap: 1rem;
         }
         .text-slate-700 {
         color: #334155;
         }
         .flex-wrap {
         flex-wrap: wrap;
         }
         .w-px {
         width: 1px;
         }
         .h-5 {
         height: 1.25rem;
         }
         .bg-slate-400 {
         background-color: #cbd5e1;
         }
         li{
         list-style:none;
         }
      </style> 
   </head>
   <body class="capitalize bg-gray-50">
      <div>
         <div class="bg-white px-6 py-4 md:px-16 md:py-12 flex flex-col gap-8">
            <div class="bg-green-100 rounded-lg px-6 py-8">
               <div class="flex justify-start items-center mb-4">
                  <div>
                     <span class="font-semibold text-lg">${itemName.join(
                       ", "
                     )}</span>
                     <p class="text-slate-600">${currentPrice.map(
                       (value) => `&#8377;${value}.00 `
                     )} INR</p>
                  </div>
               </div>
               <div class="flex flex-col gap-4" id="order-data">
                  <div class="flex gap-6 justify-start items-center">
                     <div><img alt="shop icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="invert-[0.6]" style="color:transparent" src="https://cdn-icons-png.flaticon.com/512/726/726569.png"></div>
                     <div class="flex  flex-col">
                        <span class="text-slate-600">ordered from</span>
                        <p class="text-slate-900">fmcg bharat</p>
                     </div>
                  </div>
                  <div class="flex gap-6 justify-start items-center">
                     <div><img alt="shop icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="invert-[0.6]" style="color:transparent" src="https://cdn-icons-png.flaticon.com/512/25/25473.png"></div>
                     <div class="flex  flex-col">
                        <span class="text-slate-600">total cost</span>
                        <p class="text-slate-900">
                           &#8377; ${totalPrice}.00 INR
                        </p>
                     </div>
                  </div>
                  <div class="flex gap-6 justify-start items-center">
                     <div><img alt="shop icon" loading="lazy" width="25" height="25" decoding="async" data-nimg="1" class="invert-[0.6]" style="color:transparent" src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"></div>
                     <div class="flex flex-col justify-center items-start">
                        <span class="text-slate-600">Items</span>
                        <ul class="text-slate-900">
                          ${itemName.map((value) => `<li>${value}</li>`)}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div class="bg-rose-50 py-8 px-8 flex justify-center items-center flex-col gap-4">
                  <img alt="main logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" style="color:transparent" src="https://res.cloudinary.com/dblq992uw/image/upload/v1727695741/Products-Images/jordan%20shoes/white/flr4nq5hx0cdeekbouku.png">
                  <h1 class="text-4xl font-bold text-slate-800">Thank You.</h1>
               </div>
               <div class="flex flex-col py-8 px-8 justify-center items-center">
                  <span class="text-lg font-semibold">
                     hi <!-- -->${username}<!-- -->!
                  </span>
                  <p>Thank you for your purchase!</p>
               </div>
               <div class="flex flex-col gap-4">
                  <div class="uppercase text-center">
                     <h2 class="text-3xl font-semibold text-slate-800">
                        invoice id: ${invoiceID}
                     </h2>
                     <h3 class="text-slate-400 font-semibold text-start">your order information:</h3>
                     <hr>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                     <div>
                        <span class="font-semibold">order id:</span>
                        <p class="text-slate-600">${orderId}</p>
                     </div>
                     <div>
                        <span class="font-semibold">bill to:</span>
                        <p class="text-blue-600 normal-case break-all">${useremail}</p>
                     </div>
                     <div>
                        <span class="font-semibold">order date:</span>
                        <p class="text-slate-600">${orderDate}</p>
                     </div>
                     <div>
                        <span class="font-semibold">source:</span>
                        <p class="text-slate-600">fmcg Bharat</p>
                     </div>
                  </div>
                  <div class="mt-2">
                     <h3 class="uppercase text-slate-400 font-semibold">here's what you ordered:</h3>
                     <div class="grid grid-cols-2 ">
                        <div>
                           <div class="bg-rose-50 py-2 px-4 text-start">
                              <h4 class="font-semibold">description:</h4>
                           </div>
                           <ul class=" flex flex-col justify-center items-start py-4 px-4 text-slate-600">
                              ${itemName.map((value) => `<li>${value}</li>`)}
                            </ul>
                              </div>
                        <div>
                           <div class="py-2 px-4 bg-rose-50 text-end">
                           <h4 class="font-semibold ">price:</h4>
                           </div>
                           <ul class=" flex flex-col justify-center items-end py-4 px-4 text-slate-600">
                           ${actualPrice.map(
                             (value) => `<li>&#8377;${value}.00 INR</li>`
                           )}
                           </ul>
                        </div>
                     </div>
                     <div>
                        <h4 class="px-4 py-2 bg-rose-50 font-semibold">discounts:</h4>
                        <div class="justify-between flex items-center px-4 py-4">
                           <p>sale discounts:</p>
                           <ul class="text-slate-600">
                           ${discount.map(
                             (value, index) =>
                               `(${value}%) -&#8377;${Math.floor(
                                 (actualPrice[index] * value) / 100
                               )} INR`
                           )}
                           </ul>
                        </div>
                        <hr>
                     </div>
                     <div>
                        <div class="p-4 flex justify-end items-center gap-4">
                           <span class="text-slate-400 uppercase font-semibold">total:</span>
                           <span class="text-slate-900 font-semibold">
                              &#8377; ${totalPrice}.00 INR
                           </span>
                        </div>
                        <hr>
                     </div>
                  </div>
                  <div class="text-center">
                     <h5 class="text-slate-700">please keep a copy of this receipt for your records.</h5>
                  </div>
                  <div class="text-center p-4 pt-0">
                     <div>
                        <h6 class="font-semibold">Fmcg bharat</h6>
                        <p class="text-slate-600">D4 platz 6039 Root, Switzerland</p>
                        <p class="text-slate-600">Goods and services tax (GST) Registration number: 9922CHE290020SP</p>
                     </div>
                  </div>
                  <div class="bg-red-50 p-4 text-center flex flex-col gap-4">
                     <div class="">
                        <p class="font-semibold">
                           <!-- -->need help?<!-- --> <a class="normal-case text-blue-600" href="https://www.fmcgbharat.com">fmcgbharat.com</a>
                        </p>
                     </div>
                     <p class="text-slate-600">© 2024, Fmcg Bharat, Fmcgbharat, are all other tradermarks are the property of their respective owners.</p>
                     <div class="flex gap-2 justify-center items-center text-blue-600 flex-wrap"><a href="terms-and-conditions">terms &amp; conditions</a><span class="w-px h-5 bg-slate-400 inline-block"></span><a href="privacy-and-policy">privacy &amp; security</a><span class="w-px h-5  bg-slate-400 inline-block"></span><a href="return-and-refund">return &amp; refund</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </body>
</html>

  `;
};

export default purchaseEmail;
