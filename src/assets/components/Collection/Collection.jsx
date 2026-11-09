
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ShoppingBag,
  Check,
  X,
} from "lucide-react";
import "./Collection.css";

import image1 from "../../images/img.webp";
import image2 from "../../images/img (2).webp";
import image3 from "../../images/img (3).webp";
import image4 from "../../images/img (4).webp";
import image5 from "../../images/img (5).webp";
import image6 from "../../images/img (6).webp";
import image7 from "../../images/img (7).webp";
import image8 from "../../images/img (8).webp";
import image9 from "../../images/img (9).webp";
import image10 from "../../images/img (10).webp";
import image11 from "../../images/img (11).webp";
import image12 from "../../images/img (12).webp";
import image13 from "../../images/img (13).webp";
import image14 from "../../images/img (14).webp";
import image15 from "../../images/img (15).webp";
import image16 from "../../images/img (16).webp";
import image17 from "../../images/img (17).webp";
import image18 from "../../images/img (18).webp";
import image19 from "../../images/img (19).webp";
import image20 from "../../images/img (20).webp";
import image21 from "../../images/img (21).webp";
import image22 from "../../images/img (22).webp";
import image23 from "../../images/img (23).webp";
import image24 from "../../images/img (24).webp";
import image25 from "../../images/img (25).webp";
import image26 from "../../images/img (26).webp";
import image27 from "../../images/img (27).webp";
import image28 from "../../images/img (28).webp";
import image29 from "../../images/img (29).webp";
import image30 from "../../images/img (30).webp";
import image31 from "../../images/img (31).webp";
import image32 from "../../images/img (38).webp";
const imageList = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9, image10,
  image11, image12, image13, image14, image15,
  image16, image17, image18, image19, image20,
  image21, image22, image23,image24,
  image25, image26, image27,
  image28, image29, image30,image31,image32
];

// بيانات أولية قابلة للتعديل.
// كل صورة مستقلة إلى أن نحدد الصور التي تخص اللون نفسه.
const legacyProducts = [
  {
    id: "malak-1",
    model: "1 la robe kabyle",
    color: "rose clair",
    price: 4000,
description:
  "La robe kabyle\nالفستان القبائلي باللون الزهري\nقماش كراب\nالسعر 4000 دج مع الحزام",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image4, image30, image31],
  },
  {
    id: "malak-2",
    model: "1 la robe kabyle",
    color: "rouge brique",
    price: 4000,
description:
  "La robe kabyle\nالفستان القبائلي باللون الزهري\nقماش كراب\nالسعر 4000 دج مع الحزام",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image1, image2, image32],
  },
  {
    id: "malak-3",
    model: "2 caftan royal",
    color: "rose fonce",
    price: 9000,
description:
  "قفطان 'أميرة' محبوب العرايس عاودتهولكم مع بعض التعديلات 😍😍🥰\nشوفولي اللون الملكي وتفاصيل المودال الراقية 😌😌\nيصلح لكل مناسباتكم خطوبة عرس وليمة…",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image10, image11, image18, image19],
  },
  {
    id: "malak-4",
    model: "2 caftan royal",
    color: "rose clear",
    price: 9000,
    description:
  "قفطان 'أميرة' محبوب العرايس عاودتهولكم مع بعض التعديلات 😍😍🥰\nشوفولي اللون الملكي وتفاصيل المودال الراقية 😌😌\nيصلح لكل مناسباتكم خطوبة عرس وليمة…",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image9, image17],
  },
  {
    id: "malak-5",
    model: "3 Robe d’hôtesse tulipe",
    color: "rouge brique",
    price: 4600,
description:
  "Robe d’hôtesse tulipe\nصُمم خصيصاً لمحبات البساطة والأناقة 😉🥰\nالمقاسات (M / L / XL)\nالعارضة لابسة M\nالسعر: 4200 DA فستان + محرمة الشعر\nتوصيل متوفر لكل الولايات",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image25, image26, image27, image32],
  },
  {
    id: "malak-6",
    model: "3 Robe d’hôtesse tulipe",
    color: "jaune",
    price: 4600,
  description:
  "Robe d’hôtesse tulipe\nصُمم خصيصاً لمحبات البساطة والأناقة 😉🥰\nالمقاسات (M / L / XL)\nالعارضة لابسة M\nالسعر: 4200 DA فستان + محرمة الشعر\nتوصيل متوفر لكل الولايات",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image21, image22, image23,image24],
  },
  {
    id: "malak-7",
    model: "4 Robe d’hôtesse victoria" ,
    color: "Burgundy",
    price: 4500,
description:
  "⚜️ Robe d’hôtesse « Victoria » en bordeaux\n🔱 فستان فكتوريا مستوحى من بساطة العصر الفيكتوري\nمصنوع من قماش مخملي ناعم.\nمصمم لكل امرأة تعشق البساطة والأناقة في نفس الوقت 🥰🥰\nمتوفر في المقاسات: M (38/40) L (40/42) XL (44/46)",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image12, image14, image20],
  },
  {
    id: "malak-8",
    model: "4 Robe d’hôtesse victoria",
    color: "noir",
    price: 4500,
   description:
  "⚜️ Robe d’hôtesse « Victoria » en bordeaux\n🔱 فستان فكتوريا مستوحى من بساطة العصر الفيكتوري\nمصنوع من قماش مخملي ناعم.\nمصمم لكل امرأة تعشق البساطة والأناقة في نفس الوقت 🥰🥰\nمتوفر في المقاسات: M (38/40) L (40/42) XL (44/46)",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image13, image15, image16],
  },
  {
    id: "malak-9",
    model: "5 robe aryam",
    color: "jean",
    price: 4000,
  description:
  "فستان أريام\nمخصص لكل مناسباتكم وعرضاتكم\nقماش فيبران ذو جودة عالية\nالمقاسات M / L / XL\nكمية محدودة سارعوا بالطلب",
    sizes: ["38-40", "42-44", "46-48"],
    images: [image5, image6, image7, image8],
  },
];


function formatPrice(price) {
  return `${price.toLocaleString("fr-DZ")} دج`;
}

export default function Collection() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("chanez_cart") || "[]");
    } catch {
      return [];
    }
  });
  const [notice, setNotice] = useState("");

  const products = legacyProducts;

  const groupedProducts = useMemo(() => {
    return products.reduce((groups, product) => {
      const key = product.model;
      if (!groups[key]) groups[key] = [];
      groups[key].push(product);
      return groups;
    }, {});
  }, []);

 function openProduct(product) {
  setSelectedProduct(product);
  setSelectedImage(0);
  setSelectedSize("");
  setNotice("");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

 function addToCart(product) {
  if (!selectedSize) {
    setNotice("يرجى اختيار المقاس أولًا قبل إضافة القطعة إلى السلة");
    return;
  }

  const cartItem = {
    productId: product.id,
    model: product.model,
    color: product.color,
    price: product.price,
    size: selectedSize,
    image: product.images[0],
    quantity: 1,
  };

  const updatedCart = [...cart];
  const existingIndex = updatedCart.findIndex(
    (item) =>
      item.productId === cartItem.productId &&
      item.size === cartItem.size
  );

  if (existingIndex >= 0) {
    updatedCart[existingIndex] = {
      ...updatedCart[existingIndex],
      quantity: updatedCart[existingIndex].quantity + 1,
    };
  } else {
    updatedCart.push(cartItem);
  }

  localStorage.setItem("chanez_cart", JSON.stringify(updatedCart));
  setCart(updatedCart);
  navigate("/cart");
}


  return (
    <main className="collection" dir="rtl">
      <div className="collection__ambient" aria-hidden="true" />

      <header className="collection__hero">
        <span className="collection__eyebrow">
          COLLECTION AL MALAK · ÉDITION EXCLUSIVE
        </span>

        <span className="collection__ornament" aria-hidden="true">
          ✦
        </span>

        <h1 className="collection__title">
          عالم من الأناقة
        </h1>

        <p className="collection__subtitle">
          اختاري القطعة التي تعبّر عنكِ، ودعي التفاصيل تحكي قصتكِ.
        </p>

        <div className="collection__hero-bottom">
          <span>أناقة تنبع من التفاصيل</span>
          <span className="collection__hero-line" />
          <span>اكتشفي مجموعتنا</span>
        </div>
      </header>

      <section className="collection__catalog">
<div className="collection__toolbar">
          <div>
            <span className="collection__section-kicker">
              THE COLLECTION
            </span>
            <h2 className="collection__section-title">
              اختياراتكِ المميزة
            </h2>
          </div>


        </div>



        {Object.entries(groupedProducts).map(([model, modelProducts]) => (
          <section className="collection__model" key={model}>
            <div className="collection__model-heading">
              <span className="collection__model-side">
                <span className="collection__model-line" />
                AL MALAK 
              </span>

              <div className="collection__model-center">
                <span className="collection__model-kicker">
                  LA SÉLECTION
                </span>
                <h3>الموديل {model}</h3>
                <span className="collection__model-description">
                  تفاصيل صُنعت لتلفت الأنظار
                </span>
              </div>

              <span className="collection__model-side collection__model-side--end">
                {String(modelProducts.length).padStart(2, "0")} PIÈCES
                <span className="collection__model-line" />
              </span>
            </div>

            <div className="collection__grid">
              {modelProducts.map((product, index) => (
                  <article
                    className="product-card"
                    key={product.id}
                    style={{ "--card-index": index }}
                  >
                    <button
                      type="button"
                      className="product-card__image-button"
                      onClick={() => openProduct(product)}
                      aria-label={`عرض الموديل ${product.model} - ${product.color}`}
                    >
                      <div className="product-card__image-wrap">
                        <img
                          src={product.images[0]}
                          alt={`الموديل ${product.model} - ${product.color}`}
                          className="product-card__image"
                          loading="lazy"
                        />

                        <span className="product-card__image-index">
                          N° {String(
  product.databaseId ?? product.id.split("-")[1]
).padStart(2, "0")}
                        </span>

                        <span className="product-card__view">
                          اكتشفي التفاصيل
                          <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </button>

                    <div className="product-card__info">
                      <button
                        type="button"
                        className="product-card__name"
                        onClick={() => openProduct(product)}
                      >
                        <span className="product-card__model">
                          الموديل {product.model}
                        </span>
                        <span className="product-card__color">
                          {product.color}
                        </span>
                      </button>

                      <span className="product-card__price">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="product-card__bottom">
                      <button
                        type="button"
                        className="product-card__quick-add"
                        onClick={() => {
  setSelectedProduct(product);
  setSelectedImage(0);
  setSelectedSize("");
  setNotice("");
}}
                      >
                        اكتشفي القطعة
                        <ArrowLeft size={15} />
                      </button>
                    </div>
                  </article>
              ))}
            </div>
          </section>
        ))}

        <div className="collection__endnote">
          <span className="collection__endnote-star">✦</span>
          <p>كل قطعة تحمل حكاية من الأناقة</p>
          <span>COLLECTION AL MALAK</span>
        </div>
      </section>

      {selectedProduct && (
        <div
          className="product-detail"
          role="dialog"
          aria-modal="true"
          aria-label="تفاصيل المنتج"
        >
          <button
            type="button"
            className="product-detail__close"
            onClick={() => setSelectedProduct(null)}
            aria-label="إغلاق تفاصيل المنتج"
          >
            <X size={22} />
          </button>

          <div className="product-detail__layout">
            <div className="product-detail__gallery">
              <div className="product-detail__main-image">
                <img
                  key={selectedProduct.images[selectedImage]}
                  src={selectedProduct.images[selectedImage]}
                  alt={`الموديل ${selectedProduct.model} - ${selectedProduct.color}`}
                />
              </div>

              <div className="product-detail__thumbnails">
                {selectedProduct.images.map((image, index) => (
                  <button
                    type="button"
                    key={`${selectedProduct.id}-image-${index}`}
                    className={`product-detail__thumbnail ${
                      selectedImage === index ? "is-active" : ""
                    }`}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`الصورة ${index + 1}`}
                  >
                    <img src={image} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail__content">
              <span className="product-detail__eyebrow">
                COLLECTION AL MALAK
              </span>

              <span className="product-detail__model">
                الموديل {selectedProduct.model}
              </span>

              <h2>{selectedProduct.color}</h2>

              <span className="product-detail__price">
                {formatPrice(selectedProduct.price)}
              </span>

              <div className="product-detail__divider" />

              <p className="product-detail__description">
                {selectedProduct.description}
              </p>

              <span className="product-detail__label">
                المقاس
              </span>

              <div className="product-detail__sizes">
                {selectedProduct.sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    className={`product-detail__size ${
                      selectedSize === size ? "is-active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className="product-detail__add"
                onClick={() => addToCart(selectedProduct)}
              >
                <ShoppingBag size={18} />
                أضيفي إلى السلة
                <ArrowLeft size={17} />
              </button>

              <p className="product-detail__note">
                <Check size={15} />
                اختاري المقاس المناسب قبل الإضافة إلى السلة
              </p>

              <div className="product-detail__reference">
                <span>المرجع</span>
                <span>{selectedProduct.id.toUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {notice && (
        <div className="collection__notice" role="status">
          {notice}
          <button type="button" onClick={() => setNotice("")} aria-label="إغلاق">
            <X size={16} />
          </button>
        </div>
      )}

      <button
        type="button"
        className="collection__cart-float"
        onClick={() => navigate("/cart")}
        aria-label={`السلة، ${cart.reduce((sum, item) => sum + item.quantity, 0)} منتجات`}
      >
        <ShoppingBag size={19} />
        <span>
          {cart.reduce((sum, item) => sum + item.quantity, 0)}
        </span>
      </button>
    </main>
  );
}