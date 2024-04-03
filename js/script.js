// swiper js content js
const swiper = new Swiper(".all-swipe", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    840: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// sidebar close open js
const menuBar = document.getElementById("menubar");
const sideBar = document.getElementById("sidebar");
menuBar.onclick = () => {
  if (sideBar.classList.contains("active")) {
    sideBar.classList.remove("active");
    localStorage.setItem("menu-side-bar", "close");
  } else {
    sideBar.classList.add("active");
    localStorage.setItem("menu-side-bar", "open");
  }
};

const mainBody = document.querySelector("main");
mainBody.onclick = () => {
  sideBar.classList.remove("active");
  localStorage.setItem("menu-side-bar", "close");
};

const toggleSideMenuBar = localStorage.getItem("menu-side-bar");
if (toggleSideMenuBar == "open") {
  sideBar.classList.add("active");
} else if (toggleSideMenuBar == "close") {
  sideBar.classList.remove("active");
} else {
  localStorage.removeItem("menu-side-bar");
}

// chart js
const ctx = document.getElementById("myChart");
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Tutoring Statistics",
      data: [1, 2.5, 3, 0, 0, 1.5, 5],
      backgroundColor: ["#90EE90"],
      borderColor: ["green"],
      borderWidth: 2,
      pointStyle: "circle",
      pointRadius: 5,
      fill: true,
      pointHoverRadius: 15,
    },
  ],
};
const config = {
  type: "line",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
      },
    },
  },
};
new Chart(ctx, config);

// calendar for sessions
const header = document.querySelector(".calendar h4");
const dates = document.querySelector(".dates");
const navs = document.querySelectorAll("#prev, #next");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();

function renderCalendar() {
  const start = new Date(year, month, 1).getDay();
  const endDate = new Date(year, month + 1, 0).getDate();
  const end = new Date(year, month, endDate).getDay();
  const endDatePrev = new Date(year, month, 0).getDate();

  let datesHtml = "";

  for (let i = start; i > 0; i--) {
    datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
  }

  for (let i = 1; i <= endDate; i++) {
    datesHtml += `<li>${i}</li>`;
  }

  for (let i = end; i < 6; i++) {
    datesHtml += `<li class="inactive">${i - end + 1}</li>`;
  }

  dates.innerHTML = datesHtml;
  header.textContent = `${months[month]} ${year}`;
}

navs.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const btnId = e.target.id;

    if (btnId === "prev" && month === 0) {
      year--;
      month = 11;
    } else if (btnId === "next" && month === 11) {
      year++;
      month = 0;
    } else {
      month = btnId === "next" ? month + 1 : month - 1;
    }

    date = new Date(year, month, new Date().getDate());
    year = date.getFullYear();
    month = date.getMonth();

    renderCalendar();
  });
});

renderCalendar();

// schedule session
let a = true;
dates.querySelectorAll(".dates li").forEach((el, index) => {
  el.onclick = () => {
    let Datecard = document.createElement("div");
    Datecard.innerHTML = `<div class="mt-4 time-schedule-js">
          <p class="date-month"></p>
          <div class="d-flex flex-column gap-2">
              <div class="availability-append-time">
                  <div class="d-flex align-items-center gap-2 mb-2 availability-session-time">
                      <div class="d-flex align-items-center gap-2 rounded p-2 availability-section">
                          <select name="avalibility-hours" class="avalibility-hours">
                              <option value='01' selected>01</option>
                              <option value='02'>02</option>
                              <option value='03'>03</option>
                              <option value='04'>04</option>
                              <option value='05'>05</option>
                              <option value='06'>06</option>
                              <option value='07'>07</option>
                              <option value='08'>08</option>
                              <option value='09'>09</option>
                              <option value='10'>10</option>
                              <option value='11'>11</option>
                              <option value='12'>12</option>
                          </select>
                          <span>:</span>
                          <select name="avalibility-minutes" class="avalibility-minutes">
                              <option value='00' selected>00</option>
                              <option value='01'>01</option>
                              <option value='02'>02</option>
                              <option value='03'>03</option>
                              <option value='04'>04</option>
                              <option value='05'>05</option>
                              <option value='06'>06</option>
                              <option value='07'>07</option>
                              <option value='08'>08</option>
                              <option value='09'>09</option>
                              <option value='10'>10</option>
                              <option value='11'>11</option>
                              <option value='12'>12</option>
                              <option value='13'>13</option>
                              <option value='14'>14</option>
                              <option value='15'>15</option>
                              <option value='16'>16</option>
                              <option value='17'>17</option>
                              <option value='18'>18</option>
                              <option value='19'>19</option>
                              <option value='20'>20</option>
                              <option value='21'>21</option>
                              <option value='22'>22</option>
                              <option value='23'>23</option>
                              <option value='24'>24</option>
                              <option value='25'>25</option>
                              <option value='26'>26</option>
                              <option value='27'>27</option>
                              <option value='28'>28</option>
                              <option value='29'>29</option>
                              <option value='30'>30</option>
                              <option value='31'>31</option>
                              <option value='32'>32</option>
                              <option value='33'>33</option>
                              <option value='34'>34</option>
                              <option value='35'>35</option>
                              <option value='36'>36</option>
                              <option value='37'>37</option>
                              <option value='38'>38</option>
                              <option value='39'>39</option>
                              <option value='40'>40</option>
                              <option value='41'>41</option>
                              <option value='42'>42</option>
                              <option value='43'>43</option>
                              <option value='44'>44</option>
                              <option value='45'>45</option>
                              <option value='46'>46</option>
                              <option value='47'>47</option>
                              <option value='48'>48</option>
                              <option value='49'>49</option>
                              <option value='50'>50</option>
                              <option value='51'>51</option>
                              <option value='52'>52</option>
                              <option value='53'>53</option>
                              <option value='54'>54</option>
                              <option value='55'>55</option>
                              <option value='56'>56</option>
                              <option value='57'>57</option>
                              <option value='58'>58</option>
                              <option value='59'>59</option>
                          </select>
  
                          <select name="avalibility-am-pm" class="avalibility-am-pm">
                              <option value="am" selected>AM</option>
                              <option value="am">PM</option>
                          </select>
                      </div>
                      <span>-</span>
                      <div class="d-flex align-items-center gap-2 rounded p-2 availability-section">
                          <select name="avalibility-hours" class="avalibility-hours">
                              <option value='01' selected>01</option>
                              <option value='02'>02</option>
                              <option value='03'>03</option>
                              <option value='04'>04</option>
                              <option value='05'>05</option>
                              <option value='06'>06</option>
                              <option value='07'>07</option>
                              <option value='08'>08</option>
                              <option value='09'>09</option>
                              <option value='10'>10</option>
                              <option value='11'>11</option>
                              <option value='12'>12</option>
                          </select>
                          <span>:</span>
                          <select name="avalibility-minutes" class="avalibility-minutes">
                              <option value='00' selected>00</option>
                              <option value='01'>01</option>
                              <option value='02'>02</option>
                              <option value='03'>03</option>
                              <option value='04'>04</option>
                              <option value='05'>05</option>
                              <option value='06'>06</option>
                              <option value='07'>07</option>
                              <option value='08'>08</option>
                              <option value='09'>09</option>
                              <option value='10'>10</option>
                              <option value='11'>11</option>
                              <option value='12'>12</option>
                              <option value='13'>13</option>
                              <option value='14'>14</option>
                              <option value='15'>15</option>
                              <option value='16'>16</option>
                              <option value='17'>17</option>
                              <option value='18'>18</option>
                              <option value='19'>19</option>
                              <option value='20'>20</option>
                              <option value='21'>21</option>
                              <option value='22'>22</option>
                              <option value='23'>23</option>
                              <option value='24'>24</option>
                              <option value='25'>25</option>
                              <option value='26'>26</option>
                              <option value='27'>27</option>
                              <option value='28'>28</option>
                              <option value='29'>29</option>
                              <option value='30'>30</option>
                              <option value='31'>31</option>
                              <option value='32'>32</option>
                              <option value='33'>33</option>
                              <option value='34'>34</option>
                              <option value='35'>35</option>
                              <option value='36'>36</option>
                              <option value='37'>37</option>
                              <option value='38'>38</option>
                              <option value='39'>39</option>
                              <option value='40'>40</option>
                              <option value='41'>41</option>
                              <option value='42'>42</option>
                              <option value='43'>43</option>
                              <option value='44'>44</option>
                              <option value='45'>45</option>
                              <option value='46'>46</option>
                              <option value='47'>47</option>
                              <option value='48'>48</option>
                              <option value='49'>49</option>
                              <option value='50'>50</option>
                              <option value='51'>51</option>
                              <option value='52'>52</option>
                              <option value='53'>53</option>
                              <option value='54'>54</option>
                              <option value='55'>55</option>
                              <option value='56'>56</option>
                              <option value='57'>57</option>
                              <option value='58'>58</option>
                              <option value='59'>59</option>
                          </select>
  
                          <select name="avalibility-am-pm" class="avalibility-am-pm">
                              <option value="am" selected>AM</option>
                              <option value="am">PM</option>
                          </select>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                          <a class="availability-session-time-delete"><i
                                  class="fa-solid fa-trash fs-4 text-danger"></i></a>
                      </div>
                  </div>
              </div>
  
              <div class="w-100 py-2 rounded bg-success">
                  <a class="d-flex justify-content-center text-light fw-bold availability-add">+
                      Add More</a>
              </div>
          </div>
          </div>`;

    if (a) {
      document.querySelector(".availability-res-time").append(Datecard);
      document.querySelector(".date-month").innerHTML =
        el.innerHTML + " " + header.innerHTML.slice(0, 3);
      a = false;
    }

    document.querySelector(".availability-session-time-delete").onclick =
      () => {
        document.querySelector(".time-schedule-js").parentElement.remove();
        a = true;
      };

    document.querySelectorAll(".availability-add").forEach((e, index) => {
      e.onclick = () => {
        let card = document.createElement("div");
        card.innerHTML = `<div class="d-flex align-items-center gap-2 mb-2 availability-session-time">
      <div class="d-flex align-items-center gap-2 rounded p-2 availability-section">
          <select name="avalibility-hours" class="avalibility-hours">
              <option value='01' selected>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
          </select>
          <span>:</span>
          <select name="avalibility-minutes" class="avalibility-minutes">
              <option value='00' selected>00</option>
              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
              <option value='32'>32</option>
              <option value='33'>33</option>
              <option value='34'>34</option>
              <option value='35'>35</option>
              <option value='36'>36</option>
              <option value='37'>37</option>
              <option value='38'>38</option>
              <option value='39'>39</option>
              <option value='40'>40</option>
              <option value='41'>41</option>
              <option value='42'>42</option>
              <option value='43'>43</option>
              <option value='44'>44</option>
              <option value='45'>45</option>
              <option value='46'>46</option>
              <option value='47'>47</option>
              <option value='48'>48</option>
              <option value='49'>49</option>
              <option value='50'>50</option>
              <option value='51'>51</option>
              <option value='52'>52</option>
              <option value='53'>53</option>
              <option value='54'>54</option>
              <option value='55'>55</option>
              <option value='56'>56</option>
              <option value='57'>57</option>
              <option value='58'>58</option>
              <option value='59'>59</option>
          </select>
    
          <select name="avalibility-am-pm" class="avalibility-am-pm">
              <option value="am" selected>AM</option>
              <option value="am">PM</option>
          </select>
      </div>
      <span>-</span>
      <div class="d-flex align-items-center gap-2 rounded p-2 availability-section">
          <select name="avalibility-hours" class="avalibility-hours">
              <option value='01' selected>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
          </select>
          <span>:</span>
          <select name="avalibility-minutes" class="avalibility-minutes">
              <option value='00' selected>00</option>
              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='14'>14</option>
              <option value='15'>15</option>
              <option value='16'>16</option>
              <option value='17'>17</option>
              <option value='18'>18</option>
              <option value='19'>19</option>
              <option value='20'>20</option>
              <option value='21'>21</option>
              <option value='22'>22</option>
              <option value='23'>23</option>
              <option value='24'>24</option>
              <option value='25'>25</option>
              <option value='26'>26</option>
              <option value='27'>27</option>
              <option value='28'>28</option>
              <option value='29'>29</option>
              <option value='30'>30</option>
              <option value='31'>31</option>
              <option value='32'>32</option>
              <option value='33'>33</option>
              <option value='34'>34</option>
              <option value='35'>35</option>
              <option value='36'>36</option>
              <option value='37'>37</option>
              <option value='38'>38</option>
              <option value='39'>39</option>
              <option value='40'>40</option>
              <option value='41'>41</option>
              <option value='42'>42</option>
              <option value='43'>43</option>
              <option value='44'>44</option>
              <option value='45'>45</option>
              <option value='46'>46</option>
              <option value='47'>47</option>
              <option value='48'>48</option>
              <option value='49'>49</option>
              <option value='50'>50</option>
              <option value='51'>51</option>
              <option value='52'>52</option>
              <option value='53'>53</option>
              <option value='54'>54</option>
              <option value='55'>55</option>
              <option value='56'>56</option>
              <option value='57'>57</option>
              <option value='58'>58</option>
              <option value='59'>59</option>
          </select>
    
          <select name="avalibility-am-pm" class="avalibility-am-pm">
              <option value="am" selected>AM</option>
              <option value="am">PM</option>
          </select>
      </div>
      <div class="d-flex align-items-center gap-2">
          <a class="availability-session-time-delete"><i class="fa-solid fa-trash fs-4 text-danger"></i></a>
      </div>
    </div>`;

        document
          .querySelectorAll(".availability-append-time")
          [index].append(card);

        document
          .querySelectorAll(".availability-session-time-delete")
          .forEach((d, i) => {
            d.onclick = () => {
              if (i == 0) {
                document
                  .querySelector(".time-schedule-js")
                  .parentElement.remove();
                a = true;
              } else {
                document
                  .querySelectorAll(".availability-session-time")
                  [i].parentElement.remove();
              }
            };
          });
      };
    });
  };
});

const availabilitySessionTimeDisplay = document.getElementById(
  "availability-session-time-display"
);
const availabilityOverlay = document.querySelector(".availability-overlay");
const availabilityOverlayClose = document.querySelectorAll(
  ".availability-overlay-close"
);

availabilitySessionTimeDisplay.onclick = () => {
  availabilityOverlay.classList.add("active");
};

availabilityOverlayClose.forEach((element) => {
  element.onclick = () => {
    availabilityOverlay.classList.remove("active");
  };
});
