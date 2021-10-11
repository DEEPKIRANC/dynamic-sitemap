console.log(window.location.href);
let currentURL=window.location.href;
let baseURL=currentURL.substr(0,currentURL.length-12);
console.log(baseURL);

const dashboardLink=document.querySelector("#dashboard");
const claimActivityLink=document.querySelector("#claim-activity");
const customerAttentionLink=document.querySelector("#customer-attention");
const agentAttentionLink=document.querySelector("#agent-attention");
const completedRecentlyLink=document.querySelector("#completed-recently");
const recentDecisionsLink=document.querySelector("#recent-decisions");
const appellateActivityLink=document.querySelector("#appellate-activity");
const workInProgressLink=document.querySelector("#work-in-progress");
const recentDecisionsAALink=document.querySelector("#recent-decisions-aa");
const recentHearingsLink=document.querySelector("#recent-hearings");
const reportsLink=document.querySelector("#reports");
const activityLink=document.querySelector("#activity");
const trendLink=document.querySelector("#trend");
const chargeLink=document.querySelector("#charge");
const proactiveUploadLink=document.querySelector("#proactive-uploads");
const taxDocumentsLink=document.querySelector("#tax-documents");
const messageUiTeamLink=document.querySelector("#message-ui-team");
const userManagementLink=document.querySelector("#user-management");


// updating link URLs

//console.log(updatedDashboardURL);

const setURL=(link,updatedLink)=>{

    link.setAttribute("href",baseURL+updatedLink);
}


setURL(dashboardLink,'dashboard');
setURL(claimActivityLink,'claim-status?subMenu=customer-attention-claims');
setURL(customerAttentionLink,'claim-status?subMenu=customer-attention-claims');
setURL(agentAttentionLink,'claim-status?subMenu=agent-attention-claims');
setURL(completedRecentlyLink,'claim-status?subMenu=recent-claims');
setURL(recentDecisionsLink,'claim-status?subMenu=recent-claim-decisions');
setURL(appellateActivityLink,'claim-status?subMenu=appellate-work-in-progress');
setURL(workInProgressLink,'claim-status?subMenu=appellate-work-in-progress');
setURL(recentDecisionsAALink,'claim-status?subMenu=recent-appellate-decisions');

setURL(recentHearingsLink,'claim-status?subMenu=recent-hearings');
setURL(reportsLink,'reports-activity');
setURL(activityLink,'reports-activity');
setURL(trendLink,'reports-trend');

setURL(chargeLink,'reports-charge');
setURL(proactiveUploadLink,'proactive-upload');
setURL(taxDocumentsLink,'tax-documents');
setURL(messageUiTeamLink,'message-cs');
setURL(userManagementLink,'User-Management');