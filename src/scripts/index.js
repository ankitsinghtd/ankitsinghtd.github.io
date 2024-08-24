function addUpdate(imageSrc, postUrl, postTitle, postDescription, postDate) {
  const updatesContainer = document.querySelector(".updates-container");

  const updatesDiv = document.createElement("div");
  updatesDiv.classList.add("updates", "max-width-1", "m-auto");

  const postsDiv = document.createElement("div");
  postsDiv.classList.add("updates-posts");

  const postsImgDiv = document.createElement("div");
  postsImgDiv.classList.add("posts-img");

  const imgLink = document.createElement("a");
  imgLink.href = postUrl;
  imgLink.target = "_blank";

  const imgElement = document.createElement("img");
  imgElement.src = imageSrc;
  imgElement.alt = "post";

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("updates-posts-content");

  const postTitleLink = document.createElement("a");
  postTitleLink.href = postUrl;
  postTitleLink.target = "_blank";

  const titleElement = document.createElement("h3");
  titleElement.textContent = postTitle;

  const descriptionElement = document.createElement("h4");
  descriptionElement.textContent = postDescription;

  const dateElement = document.createElement("span");
  dateElement.textContent = postDate;

  imgLink.appendChild(imgElement);
  postsImgDiv.appendChild(imgLink);
  postTitleLink.appendChild(titleElement);

  contentDiv.appendChild(postTitleLink);
  contentDiv.appendChild(descriptionElement);
  contentDiv.appendChild(dateElement);

  postsDiv.appendChild(postsImgDiv);
  postsDiv.appendChild(contentDiv);

  updatesDiv.appendChild(postsDiv);

  updatesContainer.appendChild(updatesDiv);
}

addUpdate(
  "/src/img/peh.png",
  "https://www.linkedin.com/posts/ankitsinghtd_tcmsecurity-activity-7233089642110017536-QuI_?utm_source=share&utm_medium=member_desktop",
  "Practical Ethical Hacker !!!",
  "I completed the Practical Ethical Hacking course on TCM Security",
  "24 August 2024"
);

addUpdate(
  "/src/img/CEH_badge.png",
  "https://www.linkedin.com/posts/ankitsinghtd_ceh-activity-7150399815833505792-MMvl?utm_source=share&utm_medium=member_desktop",
  "I passed CEH certification exam",
  "Check out my LinkedIn post after becoming a Certified Ethical Hacker",
  "09 January 2024"
);

addUpdate(
  "/src/img/bcbasics.png",
  "https://updraft.cyfrin.io/courses/blockchain-basics",
  "I have completed Blockchain Basics course",
  "This course is about blockchain fundamentals. You can find this course on Cyfrin Updraft.",
  "05 January 2024"
);

addUpdate(
    "/src/img/tryhackme-phish-ing.png",
    "https://medium.com/@ankitsinghtd/snapped-phish-ing-line-tryhackme-walkthrough-691ab11a0ef6",
    "Managed to write a walkthrough for phishing room",
    "Check out the tryhackme writeup at my medium page",
    "08 July 2023"
);