import React, { useEffect, useState } from "react";

export default function Ex3() {
  const [actBtn, setActBtn] = useState(1);
  function activeBtn(count: number) {
    setActBtn(count);
  }
  useEffect(() => {
    const btn = document.querySelectorAll("button");
    btn.forEach(element => {
        element.classList.remove("btn-primary");
    });
    btn[actBtn].classList.toggle("btn-primary");
    console.log(actBtn);
  });
  return (
    <div>
      <nav>
        <button className="btn"
          onClick={() => {
            activeBtn(1);
          }}
        >
          Trang chủ
        </button>
        <button className="btn"
          onClick={() => {
            activeBtn(2);
          }}
        >
          Sản phẩm
        </button>
        <button className="btn"
          onClick={() => {
            activeBtn(3);
          }}
        >
          Giới thiệu
        </button>
        <button className="btn"
          onClick={() => {
            activeBtn(4);
          }}
        >
          Liên hệ
        </button>
      </nav>
    </div>
  );
}