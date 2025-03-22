export interface Template {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  demoUrl: string; // Add this new field
}

export const templates: Template[] = [
  {
    id: "demo-anfast",
    title: "AnfastVina",
    description:
      "Website AnfastVina là một trang web chuyên về bán lẻ các sản phẩm ô tô, phụ kiện thảm sàn theo khuôn, linh kiện...",
    imageUrl:
      "https://res.cloudinary.com/dcos6mpjy/image/upload/v1742630729/8adb62ab-c005-45bb-813a-05a10024a1fa.png",
    category: "Oto, xe máy",
    demoUrl: "https://www.anfast.net.vn/",
  },
  {
    id: "demo-haluauto",
    title: "Haluauto",
    description:
      "Với thiết kế mang phong cách hiện đại, trang nhã, lịch lãm, giao diện Haluauto là sự lựa chọn tối ưu cho các website chuyên về xe...",
    imageUrl:
      "https://bizwebtheme.dktcdn.net/themes/3607/themestores/9819edadde0a20b659d8a67a1389f06c.jpg?1705550650330",
    category: "Oto, xe máy",
    demoUrl: "https://haluauto.mysapo.net/",
  },
  {
    id: "demo-dien-may",
    title: "Điện Máy",
    description:
      "Demo Điện Máy có phong cách thiết kế hiện đại, màu sắc hài hòa, giao diện được trau chuốt tỉ mỉ giúp đem tới khách hàng một trải...",
    imageUrl:
      "https://bizwebtheme.dktcdn.net/themes/3809/themestores/f73e6d318ab4c007731bb53be39f8fb1.jpg?1741572463463",
    category: "Thiết bị điện",
    demoUrl: "https://ega-dien-may.mysapo.net/",
  },
  {
    id: "demo-coffee",
    title: "Auto Center",
    description:
      "Website Auto Center là mẫu template được thiết kế hiện đại đảm bảo yêu cầu về mặt thẩm mỹ và chức năng, rất phù hợp cho những đơn...",
    imageUrl:
      "https://bizwebtheme.dktcdn.net/themes/3695/themestores/277eecab27e4cedc90dc9da71a4a08a4.png?1676435056653",
    category: "Oto, xe máy",
    demoUrl: "https://template-auto-center.mysapo.net/",
  },
];
