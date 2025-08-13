import React from "react";

export default function MarqueeTitle() {
  return (
    <div className="content">
      {/* Ensure marquee.css is loaded */}
      <link rel="stylesheet" href="/src/app/marquee.css" />
      <div className="marquee" dir="rtl" lang="fa">
        <div className="marquee_blur">
          <p className="marquee_text">
            به <span style={{fontFamily: 'inherit'}}>Onlycs</span> خوش آمدید
          </p>
        </div>
        <div className="marquee_clear">
          <p className="marquee_text">
            به <span style={{fontFamily: 'inherit'}}>Onlycs</span> خوش آمدید
          </p>
        </div>
      </div>
      <div className="text" style={{direction: 'rtl', textAlign: 'right'}}>
        این یک مارکت پریمیوم برای اسکین‌های CS:GO و CS2 است. بهترین اسکین‌ها و آیتم‌ها را اینجا پیدا کنید!
      </div>
    </div>
  );
}
