const container = document.querySelector(".wrap");
const circles = document.querySelectorAll(".circle");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const sectionThanks = document.querySelector(".thanks");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPhone = document.querySelector(".phone");
const plans = document.querySelectorAll(".plan");
const arcadePlan = document.querySelector(".plan__arcade");
const advancedPlan = document.querySelector(".plan__advanced");
const proPlan = document.querySelector(".plan__pro");
const arcadePrice = document.querySelector(".arcade__price");
const advancedPrice = document.querySelector(".advanced__price");
const proPrice = document.querySelector(".pro__price");
const toggleSwitch = document.querySelector(".checkbox");
const toggleMonthly = document.querySelector(".toggle__monthly");
const toggleYearly = document.querySelector(".toggle__yearly");
const checkboxOnline = document.querySelector(".online");
const checkboxStorage = document.querySelector(".storage");
const checkboxCustom = document.querySelector(".custom");
const onlineAddOnPrice = document.querySelector(".online-service__price");
const storageAddOnPrice = document.querySelector(".larger-storage__price");
const customizationAddOnPrice = document.querySelector(
  ".custom-profile__price"
);
const monthsFree = document.querySelectorAll(".months__free");
const planKind = document.querySelector(".kind");
const planTime = document.querySelector(".time");
const subPrice = document.querySelector(".sub__price");
const addOnPrices = document.querySelectorAll(".add-on__price");
const monthlyOrYearly = document.querySelector(".monthly__yearly");
const summaryCost = document.querySelector(".cost--summary");
const addOnsSummary = document.querySelector(".add-ons__summary");
const summaryContainer = document.querySelector(".summary__container");
const btnChange = document.querySelector(".change");
const btnNext = document.querySelector(".next");
const btnNext2s = document.querySelector(".next2s");
const btnBack = document.querySelector(".back");
const btnConfirm = document.querySelector(".confirm");

//array with monthly subscription prices
const monthlyPrices = ["$9/mo", "$12/mo", "$15/mo"];
//array with monthly add-ons prices
const monthlyAddOnsPrices = ["+$1/mo", "+$2/mo", "+$2/mo"];
//array with yearly prices
const yearlyPrices = ["$90/yr", "$120/yr", "$150/yr"];
//array witch yearlu add-ons prices
const yearlyAddOnsPrices = ["+$10/yr", "+$20/yr", "+$20/yr"];

//helping functions

//button Next
const btnNextFunction = function (a1, a2, s1, s2) {
  container.classList.remove(a1);
  container.classList.add(a2);
  s1.classList.add("hidden");
  s2.classList.remove("hidden");
};

//circles
const circlesStyleRemove = function () {
  for (const c of circles) {
    if (c.classList.contains("circle__active")) {
      c.classList.remove("circle__active");
    }
  }
};

const circleStyleAdd = function (c) {
  c.classList.add("circle__active");
};

//section1 inputs

const s1EmptyInputs = function (i1, i2, i3) {
  if (i1.value === "") {
    i1.style.borderColor = "red";
  } else if (i1.value !== "") {
    i1.style.borderColor = "rgba(214, 217, 230, 1)";
  }
  if (i2.value === "") {
    i2.style.borderColor = "red";
  } else if (i2.value !== "") {
    i2.style.borderColor = "rgba(214, 217, 230, 1)";
  }
  if (i3.value === "") {
    i3.style.borderColor = "red";
  } else if (i3.value !== "") {
    i3.style.borderColor = "rgba(214, 217, 230, 1)";
  }
  addOnsSummary.textContent = "";
};

btnNext.addEventListener("click", function () {
  //when inputs are empty
  btnNext.addEventListener(
    "click",
    s1EmptyInputs(inputName, inputEmail, inputPhone)
  );

  //changing style of step circles and sections
  if (
    inputName.value !== "" &&
    inputEmail.value !== "" &&
    inputPhone.value !== ""
  ) {
    if (container.classList.contains("actv1")) {
      btnNextFunction("actv1", "actv2", section1, section2);
      addOnsSummary.textContent = "";
      btnBack.classList.remove("hidden");
      btnNext.classList.add("hidden");
      btnNext2s.classList.remove("hidden");
      circlesStyleRemove();
      circleStyleAdd(circle2);
    } else if (container.classList.contains("actv3")) {
      btnNextFunction("actv3", "actv4", section3, section4);
      btnNext.classList.add("hidden");
      btnConfirm.classList.remove("hidden");
      circlesStyleRemove();
      circleStyleAdd(circle4);
    }
  }

  //section 4 textContent while section2
  if (container.classList.contains("actv2")) {
    addOnsSummary.textContent = "";
  }
  //case when plan is not chosen and what when user choose
  const s3EmptyInputs = function () {
    if (
      arcadePlan.classList.contains("active__plan") === false &&
      advancedPlan.classList.contains("active__plan") === false &&
      proPlan.classList.contains("active__plan") === false &&
      container.classList.contains("actv2")
    ) {
      arcadePlan.style.borderColor = "red";
      advancedPlan.style.borderColor = "red";
      proPlan.style.borderColor = "red";
    } else {
      btnNextFunction("actv2", "actv3", section2, section3);
      circlesStyleRemove();
      circleStyleAdd(circle3);
      btnNext2s.classList.add("hidden");
      btnNext.classList.remove("hidden");
    }
  };

  btnNext2s.addEventListener("click", s3EmptyInputs);

  //subscription price

  if (
    toggleSwitch.checked === false &&
    arcadePlan.classList.contains("active__plan")
  ) {
    subPrice.textContent = monthlyPrices[0];
  }
  if (
    toggleSwitch.checked === true &&
    arcadePlan.classList.contains("active__plan")
  ) {
    subPrice.textContent = yearlyPrices[0];
  }
  if (
    toggleSwitch.checked === false &&
    advancedPlan.classList.contains("active__plan")
  ) {
    subPrice.textContent = monthlyPrices[1];
  }
  if (
    toggleSwitch.checked === true &&
    advancedPlan.classList.contains("active__plan")
  ) {
    subPrice.textContent = yearlyPrices[1];
  }
  if (
    toggleSwitch.checked === false &&
    proPlan.classList.contains("active__plan")
  ) {
    subPrice.textContent = monthlyPrices[2];
  }
  if (
    toggleSwitch.checked === true &&
    proPlan.classList.contains("active__plan")
  ) {
    subPrice.textContent = yearlyPrices[2];
  }

  //add-ons checkboxes
  //when checbox Online is checked
  if (checkboxOnline.checked === true) {
    const htmlOnline = `<div class="add-on__online add">
    <p class="add-on__kind">Online service</p>
    <p class="add-on__price">${onlineAddOnPrice.textContent}</p>
  </div>`;
    addOnsSummary.insertAdjacentHTML("beforeend", htmlOnline);
  }

  //when checkbox Storage is checked
  if (checkboxStorage.checked === true) {
    const htmlStorage = `<div class="add-on__storage add">
    <p class="add-on__kind">Larger storage</p>
    <p class="add-on__price">${storageAddOnPrice.textContent}</p>
  </div>`;
    addOnsSummary.insertAdjacentHTML("beforeend", htmlStorage);
  }

  if (checkboxCustom.checked === true) {
    const htmlCustom = `<div class="add-on__custom add">
    <p class="add-on__kind">Customizable profile</p>
    <p class="add-on__price">${customizationAddOnPrice.textContent}</p>
  </div>`;
    addOnsSummary.insertAdjacentHTML("beforeend", htmlCustom);
  }
});

//toggle to yearly prices
toggleSwitch.addEventListener("click", function () {
  if (toggleSwitch.checked === true) {
    arcadePrice.textContent = yearlyPrices[0];
    advancedPrice.textContent = yearlyPrices[1];
    proPrice.textContent = yearlyPrices[2];
    onlineAddOnPrice.textContent = yearlyAddOnsPrices[0];
    storageAddOnPrice.textContent = yearlyAddOnsPrices[1];
    customizationAddOnPrice.textContent = yearlyAddOnsPrices[2];
    toggleMonthly.classList.remove("active__toggle");
    toggleYearly.classList.add("active__toggle");
    planTime.textContent = "(Yearly)";
    monthlyOrYearly.textContent = "(per year)";

    for (const m of monthsFree) {
      m.classList.remove("hidden");
    }
  } else if (toggleSwitch.checked === false) {
    arcadePrice.textContent = monthlyPrices[0];
    advancedPrice.textContent = monthlyPrices[1];
    proPrice.textContent = monthlyPrices[2];
    onlineAddOnPrice.textContent = monthlyAddOnsPrices[0];
    storageAddOnPrice.textContent = monthlyAddOnsPrices[1];
    customizationAddOnPrice.textContent = monthlyAddOnsPrices[2];
    toggleMonthly.classList.add("active__toggle");
    toggleYearly.classList.remove("active__toggle");
    planTime.textContent = "(Monthly)";
    monthlyOrYearly.textContent = "(per month)";
    for (const m of monthsFree) {
      m.classList.add("hidden");
    }
  }
});

//changing plans

// helping function
const changingPlan = function (plan1, plan2, plan3, planText) {
  if (plan1.classList.contains("acvtive__plan") === false) {
    plan1.classList.add("active__plan");
    planKind.textContent = planText;
  }
  if (plan2.classList.contains("active__plan")) {
    plan2.classList.remove("active__plan");
    planKind.textContent = planText;
  }
  if (plan3.classList.contains("active__plan")) {
    plan3.classList.remove("active__plan");
    planKind.textContent = planText;
  }
};

arcadePlan.addEventListener("click", function () {
  changingPlan(arcadePlan, advancedPlan, proPlan, "Arcade");
});

advancedPlan.addEventListener("click", function () {
  changingPlan(advancedPlan, arcadePlan, proPlan, "Advanced");
});

proPlan.addEventListener("click", function () {
  changingPlan(proPlan, arcadePlan, advancedPlan, "Pro");
});

//button back

btnBack.addEventListener("click", function () {
  if (container.classList.contains("actv4")) {
    container.classList.remove("actv4");
    container.classList.add("actv3");
    section4.classList.add("hidden");
    section3.classList.remove("hidden");
    btnConfirm.classList.add("hidden");
    btnNext.classList.remove("hidden");
    addOnsSummary.textContent = "";
    circlesStyleRemove(circle4);
    circleStyleAdd(circle3);
  } else if (container.classList.contains("actv3")) {
    container.classList.remove("actv3");
    container.classList.add("actv2");
    section3.classList.add("hidden");
    section2.classList.remove("hidden");
    btnConfirm.classList.add("hidden");
    btnNext.classList.remove("hidden");
    addOnsSummary.textContent = "";
    circlesStyleRemove(circle3);
    circleStyleAdd(circle2);
  } else if (container.classList.contains("actv2")) {
    container.classList.remove("actv2");
    container.classList.add("actv1");
  }

  if (container.classList.contains("actv2")) {
    btnNext.classList.add("hidden");
    btnNext2s.classList.remove("hidden");
  }

  if (container.classList.contains("actv1")) {
    btnNext.classList.remove("hidden");
    btnNext2s.classList.add("hidden");
  }

  if (container.classList.contains("actv1")) {
    section2.classList.add("hidden");
    section1.classList.remove("hidden");
    circlesStyleRemove(circle2);
    circleStyleAdd(circle1);
  }
});

if (container.classList.contains("actv1")) {
  addOnsSummary.textContent = "";
}

//button Change

btnChange.addEventListener("click", function () {
  container.classList.add("actv2");
  section4.classList.add("hidden");
  section2.classList.remove("hidden");
  btnNext.classList.add("hidden");
  btnConfirm.classList.add("hidden");
  btnNext2s.classList.remove("hidden");
});

btnConfirm.addEventListener("click", function () {
  if (container.classList.contains("actv4")) {
    container.classList.remove("actv4");
    container.classList.add("actv5");
    section4.classList.add("hidden");
    sectionThanks.classList.remove("hidden");
    btnConfirm.classList.add("hidden");
    btnBack.classList.add("hidden");
  }
});

//sum of plan and ad-ons
window.addEventListener("click", function () {
  if (container.classList.contains("actv4") && toggleSwitch.checked === true) {
    let windowDescription = addOnsSummary.textContent;
    let subPriceReplace = subPrice.textContent.replaceAll("[^0-9]", "");
    let subscriptionPrice = parseFloat(subPriceReplace.match(/\d+(\.\d+)?/));
    console.log(subscriptionPrice);
    console.log(windowDescription);
    const regex = /\+\$([\d.]+)\/yr/g;
    let sum = 0;
    let match;

    while ((match = regex.exec(windowDescription)) !== null) {
      const price = parseFloat(match[1]);
      sum += price;
    }

    const totalSum = subscriptionPrice + sum;
    console.log(totalSum);
    summaryCost.textContent = `+$${totalSum}/yr`;
  }

  //price sum
  if (container.classList.contains("actv4") && toggleSwitch.checked === false) {
    let windowDescription = addOnsSummary.textContent;
    let subPriceReplace = subPrice.textContent.replaceAll("[^0-9]", "");
    let subscriptionPrice = parseFloat(subPriceReplace.match(/\d+(\.\d+)?/));
    console.log(subscriptionPrice);
    console.log(windowDescription);
    const regex = /\+\$([\d.]+)\/mo/g;
    let sum = 0;
    let match;

    while ((match = regex.exec(windowDescription)) !== null) {
      const price = parseFloat(match[1]);
      sum += price;

      const totalSum = subscriptionPrice + sum;
      console.log(totalSum);
      summaryCost.textContent = `+$${totalSum}/mo`;
    }

    console.log(sum);
  }
});
