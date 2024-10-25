// "use client";
// // import ButtonIcon from "@/app/components/ui/ButtonIconIcon";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import {
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
// } from "@material-tailwind/react";
// import Reviews from "@/app/components/Reviews";
// import Faqs from "@/app/components/Faqs";
// import Drawer from "@/app/components/Drawer";
// import ButtonIcon from "@/app/components/ui/ButtonIcon";
// interface IData {
//     label : string,
//     value : string ,
//     desc? : JSX.Element
// }
// const ProductDetailsCo = () => {
//     const [activeTab, setActiveTab] = useState("reviews");
//     const [selectedSize, setSelectedSize] = useState("S"); 
//     const [drawerOpen, setDrawerOpen] = useState(false); 
//     const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//     const data : IData[] = [
//       {
//         label: "Reviews",
//         value: "reviews",
//         desc:  <Reviews/> ,
//       },
//       {
//         label: "FAQs",
//         value: "FAQs",
//         desc: <Faqs/>,
//       },
//     ];
//   const params = useParams();
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [isClient, setIsClient] = useState(false)
//   useEffect(() => {
//     setIsClient(true)
//   }, [])
//   const images = [
//     "https://www.fredperry.com/media/catalog/product/cache/966b6b11dc09a61e72a7c30be61efb42/M/8/M8593_102_V2_Q324_MOD1_FRONT.JPG",
//     "https://www.fredperry.com/media/catalog/product/cache/966b6b11dc09a61e72a7c30be61efb42/M/8/M8593_102_V2_Q324_ED2.JPG",
//   ];
//   const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
//   return (
//     <div className="product pt-[30px] lg:px-[40px] min-h-screen ">
//         <h1>{isClient ? 'This is never prerendered' : 'Prerendered'}</h1>
//       <div className="container mx-auto">
//         <div className="flex  flex-col lg:flex-row  gap-5 mb-5">
//           {/* الجزء الأيسر (صور المنتج) */}
//           <div className="left w-full md:w-full lg:w-[60%] flex flex-col md:flex-row lg:flex-row gap-5">
//             <div className="images order-2 md:order-2 lg:order-1 flex flex-row md:flex-col lg:flex-col gap-3">
//               <img
//                 className="w-auto  md:w-auto lg:w-full h-[150px]  object-contain md:object-contain  lg:object-cover cursor-pointer mb-[10px] "
//                 alt="..."
//                 src={images[0]}
//                 onClick={() => setSelectedImage(0)}
//               />
//               <img
//                 className="w-auto  md:w-auto lg:w-full h-[150px]  object-contain md:object-contain  lg:object-cover cursor-pointer mb-[10px]   "
//                 alt="..."
//                 src={images[1]}
//                 onClick={() => setSelectedImage(1)}
//               />
//             </div>
//             <div className="mainImage order-1 md:order-1 lg:order-2  flex-1">
//               <img
//                 className="w-full h-[auto]  lg:h-full object-center object-contain md:object-contain lg:object-cover cursor-pointer mb-[10px] "
//                 alt="..."
//                 src={images[selectedImage]}
//               />
//             </div>
//           </div>
//           {/* الجزء الأيمن (تفاصيل المنتج) */}
//           <div className="right w-full md:w-full lg:w-[40%] p-2  lg:p-8 ">
//             <div className="details space-y-4">
//               <h2 className="text-2xl font-semibold capitalize text-gray-800">
//                 Product Title
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 Accusamus eligendi tempora velit id dolore inventore, nam
//                 sapiente et, dolores ipsam ad expedita. Delectus sit quo
//                 accusamus laudantium sunt, exercitationem eius.
//               </p>
//               {/* تقييم النجوم */}
//               <div className="flex space-x-1">
//                 {Array.from({ length: 5 }, (_, index) => (
//                   <FaStar
//                     key={index}
//                     size={20}
//                     className="text-yellow-500"
//                   />
//                 ))}
//               </div>
//               {/* الأسعار والخصم */}
//               <div className="mt-2 flex items-center space-x-3">
//                 <p className="line-through text-sm md:text-xl text-gray-500">
//                   $100
//                 </p>
//                 <p className="text-xl md:text-2xl font-bold text-gray-900">
//                   $30
//                 </p>
//                 <p className="text-sm md:text-base font-semibold text-red-500 bg-red-100 rounded-full px-3 py-1">
//                   -30%
//                 </p>
//               </div>
//               {/* الألوان المتاحة */}
//               <div className="colors mt-4">
//                 <span className="text-lg font-medium text-gray-700">
//                   Available Colors:
//                 </span>
//                 <div className="images flex gap-3 mt-2">
//                   <Image
//                     quality={100}
//                     width={800}
//                     height={800}
//                     className=" w-auto lg:w-[100px] h-[100px] object-contain md:object-contain lg:object-cover cursor-pointer "
//                     alt="Color 1"
//                     src={images[0]}
//                     onClick={() => setSelectedImage(0)}
//                   />
//                   <Image
//                     quality={100}
//                     width={800}
//                     height={800}
//                     className=" w-auto lg:w-[100px] h-[100px] object-contain md:object-contain lg:object-cover cursor-pointer "
//                     alt="Color 2"
//                     src={images[1]}
//                     onClick={() => setSelectedImage(1)}
//                   />
//                 </div>
//               </div>
//               {/* اختيار المقاسات */}
//               <div className="sizes mt-6">
//                 <span className="text-lg font-medium text-gray-700">
//                   Choose Size:
//                 </span>
//                 <div className="flex gap-2 mt-2 flex-wrap">
//                 {sizes.map((size) => (
//                     <ButtonIcon
//                       key={size}
//                       onClick={() => setSelectedSize(size)}
//                       className={`size-btn px-4 py-2 rounded-md transition-all duration-300 border border-black ${
//                         selectedSize === size
//                           ? "bg-black text-white"
//                           : "hover:bg-black hover:text-white"
//                       }`}
//                     >
//                       {size}
//                     </ButtonIcon>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             {/* كمية المنتج */}
//             <div className="quantity mt-6 flex  items-center space-x-4">
//               <ButtonIcon
//                 onClick={() =>
//                   setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
//                 }
//                 className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300"
//               >
//                 -
//               </ButtonIcon>
//               <span className="text-lg font-semibold">{quantity}</span>
//               <ButtonIcon
//                 onClick={() => setQuantity((prev) => prev + 1)}
//                 className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-all duration-300"
//               >
//                 +
//               </ButtonIcon>
//             </div>
//             {/* زر الإضافة للسلة */}
//             <ButtonIcon  onClick={toggleDrawer}  className="mt-4 w-full text-lg rounded-md bg-black text-white py-3 px-6 font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 transition-all duration-300">
//               <MdOutlineShoppingBag size={20} />
//               <span>ADD TO CART</span>
//             </ButtonIcon>
//             {/* زر حفظ للقائمة */}
//             <ButtonIcon className="mt-3 w-full text-lg rounded-md border border-gray-300 py-3 px-6 font-medium flex items-center justify-center space-x-2 hover:border-gray-500 transition-all duration-300">
//               <FaRegHeart size={20} />
//               <span>SAVE TO WISHLIST</span>
//             </ButtonIcon>
//           </div>
//         </div>
//       </div>
//   <div className="w-full  mb-5">
//   <Tabs   value={activeTab}>
//   <TabsHeader
//                   className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
//                   indicatorProps={{
//                       className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
//                   }}
//                 //    children={undefined}
//                     placeholder={undefined} 
//                      onPointerEnterCapture={undefined}
//                       onPointerLeaveCapture={undefined}  >
//     {data.map(({ label, value }) => (
//       <Tab
//             key={value}
//             value={value}
//             onClick={() => setActiveTab(value)}
//             className={activeTab === value ? "text-gray-900" : ""}
//             //  children={undefined}
//               placeholder={undefined}
//                onPointerEnterCapture={undefined}
//                 onPointerLeaveCapture={undefined}      >
//         {label}
//       </Tab>
//     ))}
//   </TabsHeader>
//   <TabsBody className="  w-full" children={
//    <>
//      {data.map(({ value, desc }) => (
//         <TabPanel className=" p-1.5 w-full" key={value} value={value}>
//           {desc}
//         </TabPanel>
//       ))}
//    </>
//   } placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
//     {/* {data.map(({ value, desc }) => (
//       <TabPanel key={value} value={value}>
//         {desc}
//       </TabPanel>
//     ))} */}
//   </TabsBody>
// </Tabs>
//   </div>
//   <Drawer openRight={drawerOpen} toggleDrawer={toggleDrawer} />
//     </div>
//   );
// };
// export default ProductDetailsCo;
