var TEMPLATE ="# subject（crash_count/user\ndetail";
var SUBJECT = "subject";
var CRASH_COUNT = "crash_count";
var USER = "user";
var DETAIL = "detail";

var counter = document.querySelector(".summary-sentence").firstElementChild;
var crash_count = counter.firstElementChild.innerText.replace(/[^0-9^\.]/g,"");
var user = counter.lastElementChild.innerText.replace(/[^0-9^\.]/g,"");
var subject = document.querySelector(".stack-trace-title").innerText;
var detail = document.querySelector(".stack-frames").innerText;
var result = TEMPLATE.replace(SUBJECT, subject).replace(CRASH_COUNT, crash_count).replace(USER, user).replace(DETAIL, detail);
result