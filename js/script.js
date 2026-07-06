const title = document.getElementById("day-title");

const foods = document.getElementById("food-list");

const menu = {

    sat:`

    زرشک پلو با مرغ مجلسی
    <br>
    <br>
    چلو خورشت قیمه سیب زمینی
    <br>
    <br>
    لوبیا پلو با گوشت
    <br>
    <br>
    چلو خورشت فسنجون
    <br>
    <br>
    چلو جوجه کباب فیله
    <br>
    <br>
    چلو قیمه نثار اصیل قزوین
    
    `,

    sun:`
    
    زرشک پلو با مرغ مجلسی
    <br>
    <br>
    چلو خورشت قورمه سبزی
    <br>
    <br>
    چلو گوشت ماهیچه
    <br>
    <br>
    چلو جوجه کباب فیله
    <br>
    <br>
    چلو مرغ کباب فیله
    <br>
    <br>
    چلو مرغ کباب فیله
    <br>
    <br>
    کوفته تبریزی
    <br>
    <br>
    چلو خورشت فسنجون

    `,

    mon:`

    زرشک پلو با مرغ مجلسی
    <br>
    <br>
    قیمه نثار اصیل قزوین
    <br>
    <br>
    چلو مرغ پرتغالی
    <br>
    <br>
    چلو خورشت قیمه سیب زمینی
    <br>
    <br>
    چلو کباب تابه ای
    <br>
    <br>
    جلو جوجه کباب فیله

    `,

    tue:`

    زرشک پلو با مرغ مجلسی
    <br>
    <br>
    چلو مرغ کره زعفران
    <br>
    <br>
    چلو خورشت قرمه سبزی
    <br>
    <br>
    ماکارانی با گوشت چرخ کرده
    <br>
    <br>
    چلو جوجه کباب فیله
    <br>
    <br>
    چلو خورشت فسنجون
    <br>
    <br>
    چلو گوشت ماهیچه
    
    `,

    wed:`

    زرشک پلو با مرغ مجلسی
    <br>
    <br>
    قیمه نثار اصیل قزوین
    <br>
    <br>
    چلو مرغ کره زعفران
    <br>
    <br>
    چلو خورشت کرفس
    <br>
    <br>
    چلو جوجه کباب فیله
    <br>
    <br>
    چلو خورشت قرمه سبزی

    `,

    thu:`

    زرشک پلو با مرغ مجلسی
    <br>
    <br>
    چلو جوجه کباب فیله
    <br>
    <br>
    چلو مرغ کره زعفران
    <br>
    <br>
    قیمه نثار اصیل قزوین
    <br>
    <br>
    چلو خورشت قورمه سبزی

    `

};

document.querySelectorAll(".days button").forEach(button=>{

    button.onclick=function(){

    title.innerText="منو"+ this.innerText;

    foods.innerHTML=menu[this.id];

}

});