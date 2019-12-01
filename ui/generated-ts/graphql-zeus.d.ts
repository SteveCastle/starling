/* tslint:disable */
/* eslint-disable */

export type ValueTypes = {
    ["Activity"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
agent?: [{	filter?:ValueTypes["AgentFilter"]},ValueTypes["Agent"]],
user?: [{	filter?:ValueTypes["UserFilter"]},ValueTypes["User"]],
	text?:true
		__typename?: true
}>;
	["ActivityFilter"]: {
	ids?:string[],
	not?:ValueTypes["ActivityFilter"]
};
	["ActivityInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	agent?:ValueTypes["AgentRef"],
	user?:ValueTypes["UserRef"],
	text?:string
};
	["ActivityOrder"]: {
	asc?:ValueTypes["ActivityOrderable"],
	desc?:ValueTypes["ActivityOrderable"],
	then?:ValueTypes["ActivityOrder"]
};
	["ActivityOrderable"]:ActivityOrderable;
	["ActivityRef"]: {
	id:string
};
	["AddActivityPayload"]: AliasType<{
	activity?:ValueTypes["Activity"]
		__typename?: true
}>;
	["AddAgentPayload"]: AliasType<{
	agent?:ValueTypes["Agent"]
		__typename?: true
}>;
	["AddArticlePayload"]: AliasType<{
	article?:ValueTypes["Article"]
		__typename?: true
}>;
	["AddCandidatePayload"]: AliasType<{
	candidate?:ValueTypes["Candidate"]
		__typename?: true
}>;
	["AddCompanyPayload"]: AliasType<{
	company?:ValueTypes["Company"]
		__typename?: true
}>;
	["AddContactPayload"]: AliasType<{
	contact?:ValueTypes["Contact"]
		__typename?: true
}>;
	["AddDonationPayload"]: AliasType<{
	donation?:ValueTypes["Donation"]
		__typename?: true
}>;
	["AddElectionPayload"]: AliasType<{
	election?:ValueTypes["Election"]
		__typename?: true
}>;
	["AddEventPayload"]: AliasType<{
	event?:ValueTypes["Event"]
		__typename?: true
}>;
	["AddFundRaisingDrivePayload"]: AliasType<{
	fundraisingdrive?:ValueTypes["FundRaisingDrive"]
		__typename?: true
}>;
	["AddIssuePayload"]: AliasType<{
	issue?:ValueTypes["Issue"]
		__typename?: true
}>;
	["AddLandingPagePayload"]: AliasType<{
	landingpage?:ValueTypes["LandingPage"]
		__typename?: true
}>;
	["AddLayoutPayload"]: AliasType<{
	layout?:ValueTypes["Layout"]
		__typename?: true
}>;
	["AddMovementPayload"]: AliasType<{
	movement?:ValueTypes["Movement"]
		__typename?: true
}>;
	["AddNotePayload"]: AliasType<{
	note?:ValueTypes["Note"]
		__typename?: true
}>;
	["AddOpportunityPayload"]: AliasType<{
	opportunity?:ValueTypes["Opportunity"]
		__typename?: true
}>;
	["AddPetitionPayload"]: AliasType<{
	petition?:ValueTypes["Petition"]
		__typename?: true
}>;
	["AddPollPayload"]: AliasType<{
	poll?:ValueTypes["Poll"]
		__typename?: true
}>;
	["AddQuestionPayload"]: AliasType<{
	question?:ValueTypes["Question"]
		__typename?: true
}>;
	["AddRespondantPayload"]: AliasType<{
	respondant?:ValueTypes["Respondant"]
		__typename?: true
}>;
	["AddResponsePayload"]: AliasType<{
	response?:ValueTypes["Response"]
		__typename?: true
}>;
	["AddTagPayload"]: AliasType<{
	tag?:ValueTypes["Tag"]
		__typename?: true
}>;
	["AddUserPayload"]: AliasType<{
	user?:ValueTypes["User"]
		__typename?: true
}>;
	["Agent"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
user?: [{	filter?:ValueTypes["UserFilter"]},ValueTypes["User"]],
movement?: [{	filter?:ValueTypes["MovementFilter"]},ValueTypes["Movement"]],
contacts?: [{	filter?:ValueTypes["ContactFilter"],	order?:ValueTypes["ContactOrder"],	first?:number,	offset?:number},ValueTypes["Contact"]],
notes?: [{	filter?:ValueTypes["NoteFilter"],	order?:ValueTypes["NoteOrder"],	first?:number,	offset?:number},ValueTypes["Note"]],
activities?: [{	filter?:ValueTypes["ActivityFilter"],	order?:ValueTypes["ActivityOrder"],	first?:number,	offset?:number},ValueTypes["Activity"]]
		__typename?: true
}>;
	["AgentFilter"]: {
	ids?:string[],
	not?:ValueTypes["AgentFilter"]
};
	["AgentInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user?:ValueTypes["UserRef"],
	movement:ValueTypes["MovementRef"],
	contacts?:(ValueTypes["ContactRef"] | undefined)[],
	notes?:(ValueTypes["NoteRef"] | undefined)[],
	activities?:(ValueTypes["ActivityRef"] | undefined)[]
};
	["AgentOrder"]: {
	asc?:ValueTypes["AgentOrderable"],
	desc?:ValueTypes["AgentOrderable"],
	then?:ValueTypes["AgentOrder"]
};
	["AgentOrderable"]:AgentOrderable;
	["AgentRef"]: {
	id:string
};
	["Article"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
	preview?:true,
	content?:true,
movements?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["ArticleFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["ArticleFilter"],
	or?:ValueTypes["ArticleFilter"],
	not?:ValueTypes["ArticleFilter"]
};
	["ArticleInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title:string,
	slug:string,
	preview:string,
	content:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["ArticleOrder"]: {
	asc?:ValueTypes["ArticleOrderable"],
	desc?:ValueTypes["ArticleOrderable"],
	then?:ValueTypes["ArticleOrder"]
};
	["ArticleOrderable"]:ArticleOrderable;
	["ArticleRef"]: {
	id:string
};
	["Candidate"]: AliasType<{
	firstName?:true,
	lastName?:true,
	id?:true,
	dateModified?:true,
	datePublished?:true,
elections?: [{	filter?:ValueTypes["ElectionFilter"],	order?:ValueTypes["ElectionOrder"],	first?:number,	offset?:number},ValueTypes["Election"]],
	platform?:true,
movements?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["CandidateFilter"]: {
	ids?:string[],
	not?:ValueTypes["CandidateFilter"]
};
	["CandidateInput"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	elections?:(ValueTypes["ElectionRef"] | undefined)[],
	platform?:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["CandidateOrder"]: {
	asc?:ValueTypes["CandidateOrderable"],
	desc?:ValueTypes["CandidateOrderable"],
	then?:ValueTypes["CandidateOrder"]
};
	["CandidateOrderable"]:CandidateOrderable;
	["CandidateRef"]: {
	id:string
};
	["Company"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	name?:true,
	slug?:true,
boycotting?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]],
supporting?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["CompanyFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["CompanyFilter"],
	or?:ValueTypes["CompanyFilter"],
	not?:ValueTypes["CompanyFilter"]
};
	["CompanyInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	name:string,
	slug:string,
	boycotting?:(ValueTypes["MovementRef"] | undefined)[],
	supporting?:(ValueTypes["MovementRef"] | undefined)[]
};
	["CompanyOrder"]: {
	asc?:ValueTypes["CompanyOrderable"],
	desc?:ValueTypes["CompanyOrderable"],
	then?:ValueTypes["CompanyOrder"]
};
	["CompanyOrderable"]:CompanyOrderable;
	["CompanyRef"]: {
	id:string
};
	["Contact"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
user?: [{	filter?:ValueTypes["UserFilter"]},ValueTypes["User"]],
movement?: [{	filter?:ValueTypes["MovementFilter"]},ValueTypes["Movement"]],
	phoneNumber?:true,
	email?:true,
	address?:true,
notes?: [{	filter?:ValueTypes["NoteFilter"],	order?:ValueTypes["NoteOrder"],	first?:number,	offset?:number},ValueTypes["Note"]],
assignedAgents?: [{	filter?:ValueTypes["AgentFilter"],	order?:ValueTypes["AgentOrder"],	first?:number,	offset?:number},ValueTypes["Agent"]]
		__typename?: true
}>;
	["ContactFilter"]: {
	ids?:string[],
	not?:ValueTypes["ContactFilter"]
};
	["ContactInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user?:ValueTypes["UserRef"],
	movement?:ValueTypes["MovementRef"],
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(ValueTypes["NoteRef"] | undefined)[],
	assignedAgents?:(ValueTypes["AgentRef"] | undefined)[]
};
	["ContactOrder"]: {
	asc?:ValueTypes["ContactOrderable"],
	desc?:ValueTypes["ContactOrderable"],
	then?:ValueTypes["ContactOrder"]
};
	["ContactOrderable"]:ContactOrderable;
	["ContactRef"]: {
	id:string
};
	["DateTime"]:unknown;
	["DateTimeFilter"]: {
	eq?:ValueTypes["DateTime"],
	le?:ValueTypes["DateTime"],
	lt?:ValueTypes["DateTime"],
	ge?:ValueTypes["DateTime"],
	gt?:ValueTypes["DateTime"]
};
	["DeleteActivityPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteAgentPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteArticlePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteCandidatePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteCompanyPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteContactPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteDonationPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteElectionPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteEventPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteFundRaisingDrivePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteIssuePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteItemPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteLandingPagePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteLayoutPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteMovementPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteNotePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteOpportunityPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeletePetitionPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeletePollPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteQuestionPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteRespondantPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteResponsePayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteTagPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DeleteUserPayload"]: AliasType<{
	msg?:true
		__typename?: true
}>;
	["DgraphIndex"]:DgraphIndex;
	["Donation"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
user?: [{	filter?:ValueTypes["UserFilter"]},ValueTypes["User"]],
fundRaisingDrive?: [{	filter?:ValueTypes["FundRaisingDriveFilter"]},ValueTypes["FundRaisingDrive"]],
	amountDollars?:true,
	amountCents?:true
		__typename?: true
}>;
	["DonationFilter"]: {
	ids?:string[],
	not?:ValueTypes["DonationFilter"]
};
	["DonationInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user:ValueTypes["UserRef"],
	fundRaisingDrive:ValueTypes["FundRaisingDriveRef"],
	amountDollars?:number,
	amountCents?:number
};
	["DonationOrder"]: {
	asc?:ValueTypes["DonationOrderable"],
	desc?:ValueTypes["DonationOrderable"],
	then?:ValueTypes["DonationOrder"]
};
	["DonationOrderable"]:DonationOrderable;
	["DonationRef"]: {
	id:string
};
	["Election"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
	date?:true,
	description?:true,
	electionType?:true,
candidates?: [{	filter?:ValueTypes["CandidateFilter"],	order?:ValueTypes["CandidateOrder"],	first?:number,	offset?:number},ValueTypes["Candidate"]],
issues?: [{	filter?:ValueTypes["IssueFilter"],	order?:ValueTypes["IssueOrder"],	first?:number,	offset?:number},ValueTypes["Issue"]]
		__typename?: true
}>;
	["ElectionFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["ElectionFilter"],
	or?:ValueTypes["ElectionFilter"],
	not?:ValueTypes["ElectionFilter"]
};
	["ElectionInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	date:ValueTypes["DateTime"],
	description?:string,
	electionType?:ValueTypes["ElectionType"],
	candidates?:(ValueTypes["CandidateRef"] | undefined)[],
	issues?:(ValueTypes["IssueRef"] | undefined)[]
};
	["ElectionOrder"]: {
	asc?:ValueTypes["ElectionOrderable"],
	desc?:ValueTypes["ElectionOrderable"],
	then?:ValueTypes["ElectionOrder"]
};
	["ElectionOrderable"]:ElectionOrderable;
	["ElectionRef"]: {
	id:string
};
	["ElectionType"]:ElectionType;
	["Event"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
	date?:true,
	description?:true,
	body?:true,
movements?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["EventFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["EventFilter"],
	or?:ValueTypes["EventFilter"],
	not?:ValueTypes["EventFilter"]
};
	["EventInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title:string,
	slug:string,
	date?:ValueTypes["DateTime"],
	description:string,
	body:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["EventOrder"]: {
	asc?:ValueTypes["EventOrderable"],
	desc?:ValueTypes["EventOrderable"],
	then?:ValueTypes["EventOrder"]
};
	["EventOrderable"]:EventOrderable;
	["EventRef"]: {
	id:string
};
	["FloatFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
};
	["FundRaisingDrive"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
	goalType?:true,
donations?: [{	filter?:ValueTypes["DonationFilter"],	order?:ValueTypes["DonationOrder"],	first?:number,	offset?:number},ValueTypes["Donation"]],
movement?: [{	filter?:ValueTypes["MovementFilter"]},ValueTypes["Movement"]]
		__typename?: true
}>;
	["FundRaisingDriveFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["FundRaisingDriveFilter"],
	or?:ValueTypes["FundRaisingDriveFilter"],
	not?:ValueTypes["FundRaisingDriveFilter"]
};
	["FundRaisingDriveInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title:string,
	slug:string,
	goalType?:ValueTypes["GoalType"],
	donations?:(ValueTypes["DonationRef"] | undefined)[],
	movement:ValueTypes["MovementRef"]
};
	["FundRaisingDriveOrder"]: {
	asc?:ValueTypes["FundRaisingDriveOrderable"],
	desc?:ValueTypes["FundRaisingDriveOrderable"],
	then?:ValueTypes["FundRaisingDriveOrder"]
};
	["FundRaisingDriveOrderable"]:FundRaisingDriveOrderable;
	["FundRaisingDriveRef"]: {
	id:string
};
	["GoalType"]:GoalType;
	["IntFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
};
	["Issue"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
elections?: [{	filter?:ValueTypes["ElectionFilter"],	order?:ValueTypes["ElectionOrder"],	first?:number,	offset?:number},ValueTypes["Election"]],
	summary?:true,
	content?:true,
movements?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["IssueFilter"]: {
	ids?:string[],
	not?:ValueTypes["IssueFilter"]
};
	["IssueInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	elections?:(ValueTypes["ElectionRef"] | undefined)[],
	summary?:string,
	content?:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["IssueOrder"]: {
	asc?:ValueTypes["IssueOrderable"],
	desc?:ValueTypes["IssueOrderable"],
	then?:ValueTypes["IssueOrder"]
};
	["IssueOrderable"]:IssueOrderable;
	["IssueRef"]: {
	id:string
};
	["Item"]:AliasType<{
		id?:true,
	dateModified?:true,
	datePublished?:true;
		['...on Activity']: ValueTypes["Activity"];
		['...on Agent']: ValueTypes["Agent"];
		['...on Article']: ValueTypes["Article"];
		['...on Candidate']: ValueTypes["Candidate"];
		['...on Company']: ValueTypes["Company"];
		['...on Contact']: ValueTypes["Contact"];
		['...on Donation']: ValueTypes["Donation"];
		['...on Election']: ValueTypes["Election"];
		['...on Event']: ValueTypes["Event"];
		['...on FundRaisingDrive']: ValueTypes["FundRaisingDrive"];
		['...on Issue']: ValueTypes["Issue"];
		['...on LandingPage']: ValueTypes["LandingPage"];
		['...on Layout']: ValueTypes["Layout"];
		['...on Movement']: ValueTypes["Movement"];
		['...on Note']: ValueTypes["Note"];
		['...on Opportunity']: ValueTypes["Opportunity"];
		['...on Poll']: ValueTypes["Poll"];
		['...on Question']: ValueTypes["Question"];
		['...on Respondant']: ValueTypes["Respondant"];
		['...on Response']: ValueTypes["Response"];
		['...on Tag']: ValueTypes["Tag"];
		['...on User']: ValueTypes["User"];
		__typename?: true
}>;
	["ItemFilter"]: {
	ids?:string[],
	not?:ValueTypes["ItemFilter"]
};
	["ItemOrder"]: {
	asc?:ValueTypes["ItemOrderable"],
	desc?:ValueTypes["ItemOrderable"],
	then?:ValueTypes["ItemOrder"]
};
	["ItemOrderable"]:ItemOrderable;
	["ItemRef"]: {
	id:string
};
	["LandingPage"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
layout?: [{	filter?:ValueTypes["LayoutFilter"]},ValueTypes["Layout"]]
		__typename?: true
}>;
	["LandingPageFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["LandingPageFilter"],
	or?:ValueTypes["LandingPageFilter"],
	not?:ValueTypes["LandingPageFilter"]
};
	["LandingPageInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	layout?:ValueTypes["LayoutRef"]
};
	["LandingPageOrder"]: {
	asc?:ValueTypes["LandingPageOrderable"],
	desc?:ValueTypes["LandingPageOrderable"],
	then?:ValueTypes["LandingPageOrder"]
};
	["LandingPageOrderable"]:LandingPageOrderable;
	["LandingPageRef"]: {
	id:string
};
	["Layout"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
landingPage?: [{	filter?:ValueTypes["LandingPageFilter"],	order?:ValueTypes["LandingPageOrder"],	first?:number,	offset?:number},ValueTypes["LandingPage"]]
		__typename?: true
}>;
	["LayoutFilter"]: {
	ids?:string[],
	not?:ValueTypes["LayoutFilter"]
};
	["LayoutInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	landingPage?:(ValueTypes["LandingPageRef"] | undefined)[]
};
	["LayoutOrder"]: {
	asc?:ValueTypes["LayoutOrderable"],
	desc?:ValueTypes["LayoutOrderable"],
	then?:ValueTypes["LayoutOrder"]
};
	["LayoutOrderable"]:LayoutOrderable;
	["LayoutRef"]: {
	id:string
};
	["Movement"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
	regionality?:true,
	description?:true,
tags?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
owner?: [{	filter?:ValueTypes["UserFilter"]},ValueTypes["User"]],
homePage?: [{	filter?:ValueTypes["LandingPageFilter"]},ValueTypes["LandingPage"]],
landingPages?: [{	filter?:ValueTypes["LandingPageFilter"],	order?:ValueTypes["LandingPageOrder"],	first?:number,	offset?:number},ValueTypes["LandingPage"]],
articles?: [{	filter?:ValueTypes["ArticleFilter"],	order?:ValueTypes["ArticleOrder"],	first?:number,	offset?:number},ValueTypes["Article"]],
supportingCompanies?: [{	filter?:ValueTypes["CompanyFilter"],	order?:ValueTypes["CompanyOrder"],	first?:number,	offset?:number},ValueTypes["Company"]],
boycottingCompanies?: [{	filter?:ValueTypes["CompanyFilter"],	order?:ValueTypes["CompanyOrder"],	first?:number,	offset?:number},ValueTypes["Company"]],
candidates?: [{	filter?:ValueTypes["CandidateFilter"],	order?:ValueTypes["CandidateOrder"],	first?:number,	offset?:number},ValueTypes["Candidate"]],
issues?: [{	filter?:ValueTypes["IssueFilter"],	order?:ValueTypes["IssueOrder"],	first?:number,	offset?:number},ValueTypes["Issue"]],
supporters?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
friends?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]],
events?: [{	filter?:ValueTypes["EventFilter"],	order?:ValueTypes["EventOrder"],	first?:number,	offset?:number},ValueTypes["Event"]],
opportunities?: [{	filter?:ValueTypes["OpportunityFilter"],	order?:ValueTypes["OpportunityOrder"],	first?:number,	offset?:number},ValueTypes["Opportunity"]],
petitions?: [{	filter?:ValueTypes["PetitionFilter"],	order?:ValueTypes["PetitionOrder"],	first?:number,	offset?:number},ValueTypes["Petition"]],
contacts?: [{	filter?:ValueTypes["ContactFilter"],	order?:ValueTypes["ContactOrder"],	first?:number,	offset?:number},ValueTypes["Contact"]],
polls?: [{	filter?:ValueTypes["PollFilter"],	order?:ValueTypes["PollOrder"],	first?:number,	offset?:number},ValueTypes["Poll"]],
fundRaisingDrives?: [{	filter?:ValueTypes["FundRaisingDriveFilter"],	order?:ValueTypes["FundRaisingDriveOrder"],	first?:number,	offset?:number},ValueTypes["FundRaisingDrive"]],
agents?: [{	filter?:ValueTypes["AgentFilter"],	order?:ValueTypes["AgentOrder"],	first?:number,	offset?:number},ValueTypes["Agent"]]
		__typename?: true
}>;
	["MovementFilter"]: {
	ids?:string[],
	title?:ValueTypes["StringTermFilter"],
	slug?:ValueTypes["StringHashFilter"],
	regionality?:ValueTypes["Regionality"],
	description?:ValueTypes["StringFullTextFilter"],
	and?:ValueTypes["MovementFilter"],
	or?:ValueTypes["MovementFilter"],
	not?:ValueTypes["MovementFilter"]
};
	["MovementInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	regionality?:ValueTypes["Regionality"],
	description?:string,
	tags?:(ValueTypes["TagRef"] | undefined)[],
	owner:ValueTypes["UserRef"],
	homePage?:ValueTypes["LandingPageRef"],
	landingPages?:(ValueTypes["LandingPageRef"] | undefined)[],
	articles?:(ValueTypes["ArticleRef"] | undefined)[],
	supportingCompanies?:(ValueTypes["CompanyRef"] | undefined)[],
	boycottingCompanies?:(ValueTypes["CompanyRef"] | undefined)[],
	candidates?:(ValueTypes["CandidateRef"] | undefined)[],
	issues?:(ValueTypes["IssueRef"] | undefined)[],
	supporters?:(ValueTypes["UserRef"] | undefined)[],
	friends?:(ValueTypes["MovementRef"] | undefined)[],
	events?:(ValueTypes["EventRef"] | undefined)[],
	opportunities?:(ValueTypes["OpportunityRef"] | undefined)[],
	contacts?:(ValueTypes["ContactRef"] | undefined)[],
	polls?:(ValueTypes["PollRef"] | undefined)[],
	fundRaisingDrives?:(ValueTypes["FundRaisingDriveRef"] | undefined)[],
	agents?:(ValueTypes["AgentRef"] | undefined)[]
};
	["MovementOrder"]: {
	asc?:ValueTypes["MovementOrderable"],
	desc?:ValueTypes["MovementOrderable"],
	then?:ValueTypes["MovementOrder"]
};
	["MovementOrderable"]:MovementOrderable;
	["MovementRef"]: {
	id:string
};
	["Mutation"]: AliasType<{
updateItem?: [{	input:ValueTypes["UpdateItemInput"]},ValueTypes["UpdateItemPayload"]],
deleteItem?: [{	filter:ValueTypes["ItemFilter"]},ValueTypes["DeleteItemPayload"]],
addUser?: [{	input:ValueTypes["UserInput"]},ValueTypes["AddUserPayload"]],
updateUser?: [{	input:ValueTypes["UpdateUserInput"]},ValueTypes["UpdateUserPayload"]],
deleteUser?: [{	filter:ValueTypes["UserFilter"]},ValueTypes["DeleteUserPayload"]],
addMovement?: [{	input:ValueTypes["MovementInput"]},ValueTypes["AddMovementPayload"]],
updateMovement?: [{	input:ValueTypes["UpdateMovementInput"]},ValueTypes["UpdateMovementPayload"]],
deleteMovement?: [{	filter:ValueTypes["MovementFilter"]},ValueTypes["DeleteMovementPayload"]],
addLandingPage?: [{	input:ValueTypes["LandingPageInput"]},ValueTypes["AddLandingPagePayload"]],
updateLandingPage?: [{	input:ValueTypes["UpdateLandingPageInput"]},ValueTypes["UpdateLandingPagePayload"]],
deleteLandingPage?: [{	filter:ValueTypes["LandingPageFilter"]},ValueTypes["DeleteLandingPagePayload"]],
addLayout?: [{	input:ValueTypes["LayoutInput"]},ValueTypes["AddLayoutPayload"]],
updateLayout?: [{	input:ValueTypes["UpdateLayoutInput"]},ValueTypes["UpdateLayoutPayload"]],
deleteLayout?: [{	filter:ValueTypes["LayoutFilter"]},ValueTypes["DeleteLayoutPayload"]],
addElection?: [{	input:ValueTypes["ElectionInput"]},ValueTypes["AddElectionPayload"]],
updateElection?: [{	input:ValueTypes["UpdateElectionInput"]},ValueTypes["UpdateElectionPayload"]],
deleteElection?: [{	filter:ValueTypes["ElectionFilter"]},ValueTypes["DeleteElectionPayload"]],
addCandidate?: [{	input:ValueTypes["CandidateInput"]},ValueTypes["AddCandidatePayload"]],
updateCandidate?: [{	input:ValueTypes["UpdateCandidateInput"]},ValueTypes["UpdateCandidatePayload"]],
deleteCandidate?: [{	filter:ValueTypes["CandidateFilter"]},ValueTypes["DeleteCandidatePayload"]],
addIssue?: [{	input:ValueTypes["IssueInput"]},ValueTypes["AddIssuePayload"]],
updateIssue?: [{	input:ValueTypes["UpdateIssueInput"]},ValueTypes["UpdateIssuePayload"]],
deleteIssue?: [{	filter:ValueTypes["IssueFilter"]},ValueTypes["DeleteIssuePayload"]],
addCompany?: [{	input:ValueTypes["CompanyInput"]},ValueTypes["AddCompanyPayload"]],
updateCompany?: [{	input:ValueTypes["UpdateCompanyInput"]},ValueTypes["UpdateCompanyPayload"]],
deleteCompany?: [{	filter:ValueTypes["CompanyFilter"]},ValueTypes["DeleteCompanyPayload"]],
addArticle?: [{	input:ValueTypes["ArticleInput"]},ValueTypes["AddArticlePayload"]],
updateArticle?: [{	input:ValueTypes["UpdateArticleInput"]},ValueTypes["UpdateArticlePayload"]],
deleteArticle?: [{	filter:ValueTypes["ArticleFilter"]},ValueTypes["DeleteArticlePayload"]],
addEvent?: [{	input:ValueTypes["EventInput"]},ValueTypes["AddEventPayload"]],
updateEvent?: [{	input:ValueTypes["UpdateEventInput"]},ValueTypes["UpdateEventPayload"]],
deleteEvent?: [{	filter:ValueTypes["EventFilter"]},ValueTypes["DeleteEventPayload"]],
addOpportunity?: [{	input:ValueTypes["OpportunityInput"]},ValueTypes["AddOpportunityPayload"]],
updateOpportunity?: [{	input:ValueTypes["UpdateOpportunityInput"]},ValueTypes["UpdateOpportunityPayload"]],
deleteOpportunity?: [{	filter:ValueTypes["OpportunityFilter"]},ValueTypes["DeleteOpportunityPayload"]],
addPetition?: [{	input:ValueTypes["PetitionInput"]},ValueTypes["AddPetitionPayload"]],
updatePetition?: [{	input:ValueTypes["UpdatePetitionInput"]},ValueTypes["UpdatePetitionPayload"]],
deletePetition?: [{	filter:ValueTypes["PetitionFilter"]},ValueTypes["DeletePetitionPayload"]],
addPoll?: [{	input:ValueTypes["PollInput"]},ValueTypes["AddPollPayload"]],
updatePoll?: [{	input:ValueTypes["UpdatePollInput"]},ValueTypes["UpdatePollPayload"]],
deletePoll?: [{	filter:ValueTypes["PollFilter"]},ValueTypes["DeletePollPayload"]],
addRespondant?: [{	input:ValueTypes["RespondantInput"]},ValueTypes["AddRespondantPayload"]],
updateRespondant?: [{	input:ValueTypes["UpdateRespondantInput"]},ValueTypes["UpdateRespondantPayload"]],
deleteRespondant?: [{	filter:ValueTypes["RespondantFilter"]},ValueTypes["DeleteRespondantPayload"]],
addQuestion?: [{	input:ValueTypes["QuestionInput"]},ValueTypes["AddQuestionPayload"]],
updateQuestion?: [{	input:ValueTypes["UpdateQuestionInput"]},ValueTypes["UpdateQuestionPayload"]],
deleteQuestion?: [{	filter:ValueTypes["QuestionFilter"]},ValueTypes["DeleteQuestionPayload"]],
addResponse?: [{	input:ValueTypes["ResponseInput"]},ValueTypes["AddResponsePayload"]],
updateResponse?: [{	input:ValueTypes["UpdateResponseInput"]},ValueTypes["UpdateResponsePayload"]],
deleteResponse?: [{	filter:ValueTypes["ResponseFilter"]},ValueTypes["DeleteResponsePayload"]],
addTag?: [{	input:ValueTypes["TagInput"]},ValueTypes["AddTagPayload"]],
updateTag?: [{	input:ValueTypes["UpdateTagInput"]},ValueTypes["UpdateTagPayload"]],
deleteTag?: [{	filter:ValueTypes["TagFilter"]},ValueTypes["DeleteTagPayload"]],
addFundRaisingDrive?: [{	input:ValueTypes["FundRaisingDriveInput"]},ValueTypes["AddFundRaisingDrivePayload"]],
updateFundRaisingDrive?: [{	input:ValueTypes["UpdateFundRaisingDriveInput"]},ValueTypes["UpdateFundRaisingDrivePayload"]],
deleteFundRaisingDrive?: [{	filter:ValueTypes["FundRaisingDriveFilter"]},ValueTypes["DeleteFundRaisingDrivePayload"]],
addDonation?: [{	input:ValueTypes["DonationInput"]},ValueTypes["AddDonationPayload"]],
updateDonation?: [{	input:ValueTypes["UpdateDonationInput"]},ValueTypes["UpdateDonationPayload"]],
deleteDonation?: [{	filter:ValueTypes["DonationFilter"]},ValueTypes["DeleteDonationPayload"]],
addAgent?: [{	input:ValueTypes["AgentInput"]},ValueTypes["AddAgentPayload"]],
updateAgent?: [{	input:ValueTypes["UpdateAgentInput"]},ValueTypes["UpdateAgentPayload"]],
deleteAgent?: [{	filter:ValueTypes["AgentFilter"]},ValueTypes["DeleteAgentPayload"]],
addNote?: [{	input:ValueTypes["NoteInput"]},ValueTypes["AddNotePayload"]],
updateNote?: [{	input:ValueTypes["UpdateNoteInput"]},ValueTypes["UpdateNotePayload"]],
deleteNote?: [{	filter:ValueTypes["NoteFilter"]},ValueTypes["DeleteNotePayload"]],
addActivity?: [{	input:ValueTypes["ActivityInput"]},ValueTypes["AddActivityPayload"]],
updateActivity?: [{	input:ValueTypes["UpdateActivityInput"]},ValueTypes["UpdateActivityPayload"]],
deleteActivity?: [{	filter:ValueTypes["ActivityFilter"]},ValueTypes["DeleteActivityPayload"]],
addContact?: [{	input:ValueTypes["ContactInput"]},ValueTypes["AddContactPayload"]],
updateContact?: [{	input:ValueTypes["UpdateContactInput"]},ValueTypes["UpdateContactPayload"]],
deleteContact?: [{	filter:ValueTypes["ContactFilter"]},ValueTypes["DeleteContactPayload"]]
		__typename?: true
}>;
	["Note"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
agent?: [{	filter?:ValueTypes["AgentFilter"]},ValueTypes["Agent"]],
contact?: [{	filter?:ValueTypes["ContactFilter"]},ValueTypes["Contact"]],
	text?:true
		__typename?: true
}>;
	["NoteFilter"]: {
	ids?:string[],
	not?:ValueTypes["NoteFilter"]
};
	["NoteInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	agent?:ValueTypes["AgentRef"],
	contact?:ValueTypes["ContactRef"],
	text?:string
};
	["NoteOrder"]: {
	asc?:ValueTypes["NoteOrderable"],
	desc?:ValueTypes["NoteOrderable"],
	then?:ValueTypes["NoteOrder"]
};
	["NoteOrderable"]:NoteOrderable;
	["NoteRef"]: {
	id:string
};
	["Opportunity"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
	date?:true,
	description?:true,
	body?:true,
movement?: [{	filter?:ValueTypes["MovementFilter"]},ValueTypes["Movement"]],
volunteers?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]]
		__typename?: true
}>;
	["OpportunityFilter"]: {
	ids?:string[],
	not?:ValueTypes["OpportunityFilter"]
};
	["OpportunityInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title:string,
	slug:string,
	date?:ValueTypes["DateTime"],
	description:string,
	body:string,
	movement:ValueTypes["MovementRef"],
	volunteers?:(ValueTypes["UserRef"] | undefined)[]
};
	["OpportunityOrder"]: {
	asc?:ValueTypes["OpportunityOrderable"],
	desc?:ValueTypes["OpportunityOrderable"],
	then?:ValueTypes["OpportunityOrder"]
};
	["OpportunityOrderable"]:OpportunityOrderable;
	["OpportunityRef"]: {
	id:string
};
	["PatchActivity"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	agent?:ValueTypes["AgentRef"],
	user?:ValueTypes["UserRef"],
	text?:string
};
	["PatchAgent"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user?:ValueTypes["UserRef"],
	movement?:ValueTypes["MovementRef"],
	contacts?:(ValueTypes["ContactRef"] | undefined)[],
	notes?:(ValueTypes["NoteRef"] | undefined)[],
	activities?:(ValueTypes["ActivityRef"] | undefined)[]
};
	["PatchArticle"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	preview?:string,
	content?:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchCandidate"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	elections?:(ValueTypes["ElectionRef"] | undefined)[],
	platform?:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchCompany"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	name?:string,
	slug?:string,
	boycotting?:(ValueTypes["MovementRef"] | undefined)[],
	supporting?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchContact"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user?:ValueTypes["UserRef"],
	movement?:ValueTypes["MovementRef"],
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(ValueTypes["NoteRef"] | undefined)[],
	assignedAgents?:(ValueTypes["AgentRef"] | undefined)[]
};
	["PatchDonation"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user?:ValueTypes["UserRef"],
	fundRaisingDrive?:ValueTypes["FundRaisingDriveRef"],
	amountDollars?:number,
	amountCents?:number
};
	["PatchElection"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	date?:ValueTypes["DateTime"],
	description?:string,
	electionType?:ValueTypes["ElectionType"],
	candidates?:(ValueTypes["CandidateRef"] | undefined)[],
	issues?:(ValueTypes["IssueRef"] | undefined)[]
};
	["PatchEvent"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	date?:ValueTypes["DateTime"],
	description?:string,
	body?:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchFundRaisingDrive"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	goalType?:ValueTypes["GoalType"],
	donations?:(ValueTypes["DonationRef"] | undefined)[],
	movement?:ValueTypes["MovementRef"]
};
	["PatchIssue"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	elections?:(ValueTypes["ElectionRef"] | undefined)[],
	summary?:string,
	content?:string,
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchItem"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"]
};
	["PatchLandingPage"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	layout?:ValueTypes["LayoutRef"]
};
	["PatchLayout"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	landingPage?:(ValueTypes["LandingPageRef"] | undefined)[]
};
	["PatchMovement"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	regionality?:ValueTypes["Regionality"],
	description?:string,
	tags?:(ValueTypes["TagRef"] | undefined)[],
	owner?:ValueTypes["UserRef"],
	homePage?:ValueTypes["LandingPageRef"],
	landingPages?:(ValueTypes["LandingPageRef"] | undefined)[],
	articles?:(ValueTypes["ArticleRef"] | undefined)[],
	supportingCompanies?:(ValueTypes["CompanyRef"] | undefined)[],
	boycottingCompanies?:(ValueTypes["CompanyRef"] | undefined)[],
	candidates?:(ValueTypes["CandidateRef"] | undefined)[],
	issues?:(ValueTypes["IssueRef"] | undefined)[],
	supporters?:(ValueTypes["UserRef"] | undefined)[],
	friends?:(ValueTypes["MovementRef"] | undefined)[],
	events?:(ValueTypes["EventRef"] | undefined)[],
	opportunities?:(ValueTypes["OpportunityRef"] | undefined)[],
	contacts?:(ValueTypes["ContactRef"] | undefined)[],
	polls?:(ValueTypes["PollRef"] | undefined)[],
	fundRaisingDrives?:(ValueTypes["FundRaisingDriveRef"] | undefined)[],
	agents?:(ValueTypes["AgentRef"] | undefined)[]
};
	["PatchNote"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	agent?:ValueTypes["AgentRef"],
	contact?:ValueTypes["ContactRef"],
	text?:string
};
	["PatchOpportunity"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	date?:ValueTypes["DateTime"],
	description?:string,
	body?:string,
	movement?:ValueTypes["MovementRef"],
	volunteers?:(ValueTypes["UserRef"] | undefined)[]
};
	["PatchPetition"]: {
	title?:string,
	slug?:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(ValueTypes["UserRef"] | undefined)[],
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchPoll"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	slug?:string,
	respondants?:(ValueTypes["RespondantRef"] | undefined)[],
	questions?:ValueTypes["QuestionRef"],
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PatchQuestion"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	question?:string,
	choices?:(string | undefined)[]
};
	["PatchRespondant"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user?:ValueTypes["UserRef"],
	responses?:(ValueTypes["ResponseRef"] | undefined)[]
};
	["PatchResponse"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	respondant?:ValueTypes["RespondantRef"],
	question?:ValueTypes["QuestionRef"],
	answer?:string
};
	["PatchTag"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	description?:string,
	icon?:string
};
	["PatchUser"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	displayName?:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(ValueTypes["MovementRef"] | undefined)[],
	donationsMade?:(ValueTypes["FundRaisingDriveRef"] | undefined)[],
	supporting?:(ValueTypes["MovementRef"] | undefined)[],
	volunteeringAt?:(ValueTypes["OpportunityRef"] | undefined)[]
};
	["Person"]:AliasType<{
		firstName?:true,
	lastName?:true;
		['...on Candidate']: ValueTypes["Candidate"];
		['...on User']: ValueTypes["User"];
		__typename?: true
}>;
	["PersonOrder"]: {
	asc?:ValueTypes["PersonOrderable"],
	desc?:ValueTypes["PersonOrderable"],
	then?:ValueTypes["PersonOrder"]
};
	["PersonOrderable"]:PersonOrderable;
	["Petition"]: AliasType<{
	title?:true,
	slug?:true,
	description?:true,
	body?:true,
	goal?:true,
signers?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
movements?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["PetitionFilter"]: {
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["PetitionFilter"],
	or?:ValueTypes["PetitionFilter"],
	not?:ValueTypes["PetitionFilter"]
};
	["PetitionInput"]: {
	title:string,
	slug:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(ValueTypes["UserRef"] | undefined)[],
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PetitionOrder"]: {
	asc?:ValueTypes["PetitionOrderable"],
	desc?:ValueTypes["PetitionOrderable"],
	then?:ValueTypes["PetitionOrder"]
};
	["PetitionOrderable"]:PetitionOrderable;
	["Poll"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	slug?:true,
respondants?: [{	filter?:ValueTypes["RespondantFilter"],	order?:ValueTypes["RespondantOrder"],	first?:number,	offset?:number},ValueTypes["Respondant"]],
questions?: [{	filter?:ValueTypes["QuestionFilter"]},ValueTypes["Question"]],
movements?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]]
		__typename?: true
}>;
	["PollFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["PollFilter"],
	or?:ValueTypes["PollFilter"],
	not?:ValueTypes["PollFilter"]
};
	["PollInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title:string,
	slug:string,
	respondants?:(ValueTypes["RespondantRef"] | undefined)[],
	questions?:ValueTypes["QuestionRef"],
	movements?:(ValueTypes["MovementRef"] | undefined)[]
};
	["PollOrder"]: {
	asc?:ValueTypes["PollOrderable"],
	desc?:ValueTypes["PollOrderable"],
	then?:ValueTypes["PollOrder"]
};
	["PollOrderable"]:PollOrderable;
	["PollRef"]: {
	id:string
};
	["ProductType"]:ProductType;
	["Query"]: AliasType<{
getItem?: [{	id:string},ValueTypes["Item"]],
queryItem?: [{	filter?:ValueTypes["ItemFilter"],	order?:ValueTypes["ItemOrder"],	first?:number,	offset?:number},ValueTypes["Item"]],
queryPerson?: [{	order?:ValueTypes["PersonOrder"],	first?:number,	offset?:number},ValueTypes["Person"]],
getUser?: [{	id:string},ValueTypes["User"]],
queryUser?: [{	filter?:ValueTypes["UserFilter"],	order?:ValueTypes["UserOrder"],	first?:number,	offset?:number},ValueTypes["User"]],
getMovement?: [{	id:string},ValueTypes["Movement"]],
queryMovement?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]],
getLandingPage?: [{	id:string},ValueTypes["LandingPage"]],
queryLandingPage?: [{	filter?:ValueTypes["LandingPageFilter"],	order?:ValueTypes["LandingPageOrder"],	first?:number,	offset?:number},ValueTypes["LandingPage"]],
getLayout?: [{	id:string},ValueTypes["Layout"]],
queryLayout?: [{	filter?:ValueTypes["LayoutFilter"],	order?:ValueTypes["LayoutOrder"],	first?:number,	offset?:number},ValueTypes["Layout"]],
getElection?: [{	id:string},ValueTypes["Election"]],
queryElection?: [{	filter?:ValueTypes["ElectionFilter"],	order?:ValueTypes["ElectionOrder"],	first?:number,	offset?:number},ValueTypes["Election"]],
getCandidate?: [{	id:string},ValueTypes["Candidate"]],
queryCandidate?: [{	filter?:ValueTypes["CandidateFilter"],	order?:ValueTypes["CandidateOrder"],	first?:number,	offset?:number},ValueTypes["Candidate"]],
getIssue?: [{	id:string},ValueTypes["Issue"]],
queryIssue?: [{	filter?:ValueTypes["IssueFilter"],	order?:ValueTypes["IssueOrder"],	first?:number,	offset?:number},ValueTypes["Issue"]],
getCompany?: [{	id:string},ValueTypes["Company"]],
queryCompany?: [{	filter?:ValueTypes["CompanyFilter"],	order?:ValueTypes["CompanyOrder"],	first?:number,	offset?:number},ValueTypes["Company"]],
getArticle?: [{	id:string},ValueTypes["Article"]],
queryArticle?: [{	filter?:ValueTypes["ArticleFilter"],	order?:ValueTypes["ArticleOrder"],	first?:number,	offset?:number},ValueTypes["Article"]],
getEvent?: [{	id:string},ValueTypes["Event"]],
queryEvent?: [{	filter?:ValueTypes["EventFilter"],	order?:ValueTypes["EventOrder"],	first?:number,	offset?:number},ValueTypes["Event"]],
getOpportunity?: [{	id:string},ValueTypes["Opportunity"]],
queryOpportunity?: [{	filter?:ValueTypes["OpportunityFilter"],	order?:ValueTypes["OpportunityOrder"],	first?:number,	offset?:number},ValueTypes["Opportunity"]],
queryPetition?: [{	filter?:ValueTypes["PetitionFilter"],	order?:ValueTypes["PetitionOrder"],	first?:number,	offset?:number},ValueTypes["Petition"]],
getPoll?: [{	id:string},ValueTypes["Poll"]],
queryPoll?: [{	filter?:ValueTypes["PollFilter"],	order?:ValueTypes["PollOrder"],	first?:number,	offset?:number},ValueTypes["Poll"]],
getRespondant?: [{	id:string},ValueTypes["Respondant"]],
queryRespondant?: [{	filter?:ValueTypes["RespondantFilter"],	order?:ValueTypes["RespondantOrder"],	first?:number,	offset?:number},ValueTypes["Respondant"]],
getQuestion?: [{	id:string},ValueTypes["Question"]],
queryQuestion?: [{	filter?:ValueTypes["QuestionFilter"],	order?:ValueTypes["QuestionOrder"],	first?:number,	offset?:number},ValueTypes["Question"]],
getResponse?: [{	id:string},ValueTypes["Response"]],
queryResponse?: [{	filter?:ValueTypes["ResponseFilter"],	order?:ValueTypes["ResponseOrder"],	first?:number,	offset?:number},ValueTypes["Response"]],
getTag?: [{	id:string},ValueTypes["Tag"]],
queryTag?: [{	filter?:ValueTypes["TagFilter"],	order?:ValueTypes["TagOrder"],	first?:number,	offset?:number},ValueTypes["Tag"]],
getFundRaisingDrive?: [{	id:string},ValueTypes["FundRaisingDrive"]],
queryFundRaisingDrive?: [{	filter?:ValueTypes["FundRaisingDriveFilter"],	order?:ValueTypes["FundRaisingDriveOrder"],	first?:number,	offset?:number},ValueTypes["FundRaisingDrive"]],
getDonation?: [{	id:string},ValueTypes["Donation"]],
queryDonation?: [{	filter?:ValueTypes["DonationFilter"],	order?:ValueTypes["DonationOrder"],	first?:number,	offset?:number},ValueTypes["Donation"]],
getAgent?: [{	id:string},ValueTypes["Agent"]],
queryAgent?: [{	filter?:ValueTypes["AgentFilter"],	order?:ValueTypes["AgentOrder"],	first?:number,	offset?:number},ValueTypes["Agent"]],
getNote?: [{	id:string},ValueTypes["Note"]],
queryNote?: [{	filter?:ValueTypes["NoteFilter"],	order?:ValueTypes["NoteOrder"],	first?:number,	offset?:number},ValueTypes["Note"]],
getActivity?: [{	id:string},ValueTypes["Activity"]],
queryActivity?: [{	filter?:ValueTypes["ActivityFilter"],	order?:ValueTypes["ActivityOrder"],	first?:number,	offset?:number},ValueTypes["Activity"]],
getContact?: [{	id:string},ValueTypes["Contact"]],
queryContact?: [{	filter?:ValueTypes["ContactFilter"],	order?:ValueTypes["ContactOrder"],	first?:number,	offset?:number},ValueTypes["Contact"]]
		__typename?: true
}>;
	["Question"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	question?:true,
	choices?:true
		__typename?: true
}>;
	["QuestionFilter"]: {
	ids?:string[],
	not?:ValueTypes["QuestionFilter"]
};
	["QuestionInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	question?:string,
	choices?:(string | undefined)[]
};
	["QuestionOrder"]: {
	asc?:ValueTypes["QuestionOrderable"],
	desc?:ValueTypes["QuestionOrderable"],
	then?:ValueTypes["QuestionOrder"]
};
	["QuestionOrderable"]:QuestionOrderable;
	["QuestionRef"]: {
	id:string
};
	["Regionality"]:Regionality;
	["Respondant"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
user?: [{	filter?:ValueTypes["UserFilter"]},ValueTypes["User"]],
responses?: [{	filter?:ValueTypes["ResponseFilter"],	order?:ValueTypes["ResponseOrder"],	first?:number,	offset?:number},ValueTypes["Response"]]
		__typename?: true
}>;
	["RespondantFilter"]: {
	ids?:string[],
	not?:ValueTypes["RespondantFilter"]
};
	["RespondantInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	user:ValueTypes["UserRef"],
	responses?:(ValueTypes["ResponseRef"] | undefined)[]
};
	["RespondantOrder"]: {
	asc?:ValueTypes["RespondantOrderable"],
	desc?:ValueTypes["RespondantOrderable"],
	then?:ValueTypes["RespondantOrder"]
};
	["RespondantOrderable"]:RespondantOrderable;
	["RespondantRef"]: {
	id:string
};
	["Response"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
respondant?: [{	filter?:ValueTypes["RespondantFilter"]},ValueTypes["Respondant"]],
question?: [{	filter?:ValueTypes["QuestionFilter"]},ValueTypes["Question"]],
	answer?:true
		__typename?: true
}>;
	["ResponseFilter"]: {
	ids?:string[],
	not?:ValueTypes["ResponseFilter"]
};
	["ResponseInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	respondant?:ValueTypes["RespondantRef"],
	question?:ValueTypes["QuestionRef"],
	answer?:string
};
	["ResponseOrder"]: {
	asc?:ValueTypes["ResponseOrderable"],
	desc?:ValueTypes["ResponseOrderable"],
	then?:ValueTypes["ResponseOrder"]
};
	["ResponseOrderable"]:ResponseOrderable;
	["ResponseRef"]: {
	id:string
};
	["StringExactFilter"]: {
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string
};
	["StringFullTextFilter"]: {
	alloftext?:string,
	anyoftext?:string
};
	["StringHashFilter"]: {
	eq?:string
};
	["StringRegExpFilter"]: {
	regexp?:string
};
	["StringTermFilter"]: {
	allofterms?:string,
	anyofterms?:string
};
	["Tag"]: AliasType<{
	id?:true,
	dateModified?:true,
	datePublished?:true,
	title?:true,
	description?:true,
	icon?:true
		__typename?: true
}>;
	["TagFilter"]: {
	ids?:string[],
	not?:ValueTypes["TagFilter"]
};
	["TagInput"]: {
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	title?:string,
	description?:string,
	icon?:string
};
	["TagOrder"]: {
	asc?:ValueTypes["TagOrderable"],
	desc?:ValueTypes["TagOrderable"],
	then?:ValueTypes["TagOrder"]
};
	["TagOrderable"]:TagOrderable;
	["TagRef"]: {
	id:string
};
	["UpdateActivityInput"]: {
	filter:ValueTypes["ActivityFilter"],
	patch:ValueTypes["PatchActivity"]
};
	["UpdateActivityPayload"]: AliasType<{
	activity?:ValueTypes["Activity"]
		__typename?: true
}>;
	["UpdateAgentInput"]: {
	filter:ValueTypes["AgentFilter"],
	patch:ValueTypes["PatchAgent"]
};
	["UpdateAgentPayload"]: AliasType<{
	agent?:ValueTypes["Agent"]
		__typename?: true
}>;
	["UpdateArticleInput"]: {
	filter:ValueTypes["ArticleFilter"],
	patch:ValueTypes["PatchArticle"]
};
	["UpdateArticlePayload"]: AliasType<{
	article?:ValueTypes["Article"]
		__typename?: true
}>;
	["UpdateCandidateInput"]: {
	filter:ValueTypes["CandidateFilter"],
	patch:ValueTypes["PatchCandidate"]
};
	["UpdateCandidatePayload"]: AliasType<{
	candidate?:ValueTypes["Candidate"]
		__typename?: true
}>;
	["UpdateCompanyInput"]: {
	filter:ValueTypes["CompanyFilter"],
	patch:ValueTypes["PatchCompany"]
};
	["UpdateCompanyPayload"]: AliasType<{
	company?:ValueTypes["Company"]
		__typename?: true
}>;
	["UpdateContactInput"]: {
	filter:ValueTypes["ContactFilter"],
	patch:ValueTypes["PatchContact"]
};
	["UpdateContactPayload"]: AliasType<{
	contact?:ValueTypes["Contact"]
		__typename?: true
}>;
	["UpdateDonationInput"]: {
	filter:ValueTypes["DonationFilter"],
	patch:ValueTypes["PatchDonation"]
};
	["UpdateDonationPayload"]: AliasType<{
	donation?:ValueTypes["Donation"]
		__typename?: true
}>;
	["UpdateElectionInput"]: {
	filter:ValueTypes["ElectionFilter"],
	patch:ValueTypes["PatchElection"]
};
	["UpdateElectionPayload"]: AliasType<{
	election?:ValueTypes["Election"]
		__typename?: true
}>;
	["UpdateEventInput"]: {
	filter:ValueTypes["EventFilter"],
	patch:ValueTypes["PatchEvent"]
};
	["UpdateEventPayload"]: AliasType<{
	event?:ValueTypes["Event"]
		__typename?: true
}>;
	["UpdateFundRaisingDriveInput"]: {
	filter:ValueTypes["FundRaisingDriveFilter"],
	patch:ValueTypes["PatchFundRaisingDrive"]
};
	["UpdateFundRaisingDrivePayload"]: AliasType<{
	fundraisingdrive?:ValueTypes["FundRaisingDrive"]
		__typename?: true
}>;
	["UpdateIssueInput"]: {
	filter:ValueTypes["IssueFilter"],
	patch:ValueTypes["PatchIssue"]
};
	["UpdateIssuePayload"]: AliasType<{
	issue?:ValueTypes["Issue"]
		__typename?: true
}>;
	["UpdateItemInput"]: {
	filter:ValueTypes["ItemFilter"],
	patch:ValueTypes["PatchItem"]
};
	["UpdateItemPayload"]: AliasType<{
	item?:ValueTypes["Item"]
		__typename?: true
}>;
	["UpdateLandingPageInput"]: {
	filter:ValueTypes["LandingPageFilter"],
	patch:ValueTypes["PatchLandingPage"]
};
	["UpdateLandingPagePayload"]: AliasType<{
	landingpage?:ValueTypes["LandingPage"]
		__typename?: true
}>;
	["UpdateLayoutInput"]: {
	filter:ValueTypes["LayoutFilter"],
	patch:ValueTypes["PatchLayout"]
};
	["UpdateLayoutPayload"]: AliasType<{
	layout?:ValueTypes["Layout"]
		__typename?: true
}>;
	["UpdateMovementInput"]: {
	filter:ValueTypes["MovementFilter"],
	patch:ValueTypes["PatchMovement"]
};
	["UpdateMovementPayload"]: AliasType<{
	movement?:ValueTypes["Movement"]
		__typename?: true
}>;
	["UpdateNoteInput"]: {
	filter:ValueTypes["NoteFilter"],
	patch:ValueTypes["PatchNote"]
};
	["UpdateNotePayload"]: AliasType<{
	note?:ValueTypes["Note"]
		__typename?: true
}>;
	["UpdateOpportunityInput"]: {
	filter:ValueTypes["OpportunityFilter"],
	patch:ValueTypes["PatchOpportunity"]
};
	["UpdateOpportunityPayload"]: AliasType<{
	opportunity?:ValueTypes["Opportunity"]
		__typename?: true
}>;
	["UpdatePetitionInput"]: {
	filter:ValueTypes["PetitionFilter"],
	patch:ValueTypes["PatchPetition"]
};
	["UpdatePetitionPayload"]: AliasType<{
	petition?:ValueTypes["Petition"]
		__typename?: true
}>;
	["UpdatePollInput"]: {
	filter:ValueTypes["PollFilter"],
	patch:ValueTypes["PatchPoll"]
};
	["UpdatePollPayload"]: AliasType<{
	poll?:ValueTypes["Poll"]
		__typename?: true
}>;
	["UpdateQuestionInput"]: {
	filter:ValueTypes["QuestionFilter"],
	patch:ValueTypes["PatchQuestion"]
};
	["UpdateQuestionPayload"]: AliasType<{
	question?:ValueTypes["Question"]
		__typename?: true
}>;
	["UpdateRespondantInput"]: {
	filter:ValueTypes["RespondantFilter"],
	patch:ValueTypes["PatchRespondant"]
};
	["UpdateRespondantPayload"]: AliasType<{
	respondant?:ValueTypes["Respondant"]
		__typename?: true
}>;
	["UpdateResponseInput"]: {
	filter:ValueTypes["ResponseFilter"],
	patch:ValueTypes["PatchResponse"]
};
	["UpdateResponsePayload"]: AliasType<{
	response?:ValueTypes["Response"]
		__typename?: true
}>;
	["UpdateTagInput"]: {
	filter:ValueTypes["TagFilter"],
	patch:ValueTypes["PatchTag"]
};
	["UpdateTagPayload"]: AliasType<{
	tag?:ValueTypes["Tag"]
		__typename?: true
}>;
	["UpdateUserInput"]: {
	filter:ValueTypes["UserFilter"],
	patch:ValueTypes["PatchUser"]
};
	["UpdateUserPayload"]: AliasType<{
	user?:ValueTypes["User"]
		__typename?: true
}>;
	["User"]: AliasType<{
	firstName?:true,
	lastName?:true,
	id?:true,
	dateModified?:true,
	datePublished?:true,
	displayName?:true,
	slug?:true,
	bio?:true,
movementsOwned?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]],
donationsMade?: [{	filter?:ValueTypes["FundRaisingDriveFilter"],	order?:ValueTypes["FundRaisingDriveOrder"],	first?:number,	offset?:number},ValueTypes["FundRaisingDrive"]],
supporting?: [{	filter?:ValueTypes["MovementFilter"],	order?:ValueTypes["MovementOrder"],	first?:number,	offset?:number},ValueTypes["Movement"]],
volunteeringAt?: [{	filter?:ValueTypes["OpportunityFilter"],	order?:ValueTypes["OpportunityOrder"],	first?:number,	offset?:number},ValueTypes["Opportunity"]]
		__typename?: true
}>;
	["UserFilter"]: {
	ids?:string[],
	slug?:ValueTypes["StringHashFilter"],
	and?:ValueTypes["UserFilter"],
	or?:ValueTypes["UserFilter"],
	not?:ValueTypes["UserFilter"]
};
	["UserInput"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:ValueTypes["DateTime"],
	datePublished?:ValueTypes["DateTime"],
	displayName:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(ValueTypes["MovementRef"] | undefined)[],
	donationsMade?:(ValueTypes["FundRaisingDriveRef"] | undefined)[],
	supporting?:(ValueTypes["MovementRef"] | undefined)[],
	volunteeringAt?:(ValueTypes["OpportunityRef"] | undefined)[]
};
	["UserOrder"]: {
	asc?:ValueTypes["UserOrderable"],
	desc?:ValueTypes["UserOrderable"],
	then?:ValueTypes["UserOrder"]
};
	["UserOrderable"]:UserOrderable;
	["UserRef"]: {
	id:string
}
  }

export type PartialObjects = {
    ["Activity"]: {
		__typename?: "Activity";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			agent?:PartialObjects["Agent"],
			user?:PartialObjects["User"],
			text?:string
	},
	["ActivityFilter"]: {
	ids?:string[],
	not?:PartialObjects["ActivityFilter"]
},
	["ActivityInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	agent?:PartialObjects["AgentRef"],
	user?:PartialObjects["UserRef"],
	text?:string
},
	["ActivityOrder"]: {
	asc?:PartialObjects["ActivityOrderable"],
	desc?:PartialObjects["ActivityOrderable"],
	then?:PartialObjects["ActivityOrder"]
},
	["ActivityOrderable"]:ActivityOrderable,
	["ActivityRef"]: {
	id:string
},
	["AddActivityPayload"]: {
		__typename?: "AddActivityPayload";
			activity?:PartialObjects["Activity"]
	},
	["AddAgentPayload"]: {
		__typename?: "AddAgentPayload";
			agent?:PartialObjects["Agent"]
	},
	["AddArticlePayload"]: {
		__typename?: "AddArticlePayload";
			article?:PartialObjects["Article"]
	},
	["AddCandidatePayload"]: {
		__typename?: "AddCandidatePayload";
			candidate?:PartialObjects["Candidate"]
	},
	["AddCompanyPayload"]: {
		__typename?: "AddCompanyPayload";
			company?:PartialObjects["Company"]
	},
	["AddContactPayload"]: {
		__typename?: "AddContactPayload";
			contact?:PartialObjects["Contact"]
	},
	["AddDonationPayload"]: {
		__typename?: "AddDonationPayload";
			donation?:PartialObjects["Donation"]
	},
	["AddElectionPayload"]: {
		__typename?: "AddElectionPayload";
			election?:PartialObjects["Election"]
	},
	["AddEventPayload"]: {
		__typename?: "AddEventPayload";
			event?:PartialObjects["Event"]
	},
	["AddFundRaisingDrivePayload"]: {
		__typename?: "AddFundRaisingDrivePayload";
			fundraisingdrive?:PartialObjects["FundRaisingDrive"]
	},
	["AddIssuePayload"]: {
		__typename?: "AddIssuePayload";
			issue?:PartialObjects["Issue"]
	},
	["AddLandingPagePayload"]: {
		__typename?: "AddLandingPagePayload";
			landingpage?:PartialObjects["LandingPage"]
	},
	["AddLayoutPayload"]: {
		__typename?: "AddLayoutPayload";
			layout?:PartialObjects["Layout"]
	},
	["AddMovementPayload"]: {
		__typename?: "AddMovementPayload";
			movement?:PartialObjects["Movement"]
	},
	["AddNotePayload"]: {
		__typename?: "AddNotePayload";
			note?:PartialObjects["Note"]
	},
	["AddOpportunityPayload"]: {
		__typename?: "AddOpportunityPayload";
			opportunity?:PartialObjects["Opportunity"]
	},
	["AddPetitionPayload"]: {
		__typename?: "AddPetitionPayload";
			petition?:PartialObjects["Petition"]
	},
	["AddPollPayload"]: {
		__typename?: "AddPollPayload";
			poll?:PartialObjects["Poll"]
	},
	["AddQuestionPayload"]: {
		__typename?: "AddQuestionPayload";
			question?:PartialObjects["Question"]
	},
	["AddRespondantPayload"]: {
		__typename?: "AddRespondantPayload";
			respondant?:PartialObjects["Respondant"]
	},
	["AddResponsePayload"]: {
		__typename?: "AddResponsePayload";
			response?:PartialObjects["Response"]
	},
	["AddTagPayload"]: {
		__typename?: "AddTagPayload";
			tag?:PartialObjects["Tag"]
	},
	["AddUserPayload"]: {
		__typename?: "AddUserPayload";
			user?:PartialObjects["User"]
	},
	["Agent"]: {
		__typename?: "Agent";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			user?:PartialObjects["User"],
			movement?:PartialObjects["Movement"],
			contacts?:(PartialObjects["Contact"] | undefined)[],
			notes?:(PartialObjects["Note"] | undefined)[],
			activities?:(PartialObjects["Activity"] | undefined)[]
	},
	["AgentFilter"]: {
	ids?:string[],
	not?:PartialObjects["AgentFilter"]
},
	["AgentInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user?:PartialObjects["UserRef"],
	movement:PartialObjects["MovementRef"],
	contacts?:(PartialObjects["ContactRef"] | undefined)[],
	notes?:(PartialObjects["NoteRef"] | undefined)[],
	activities?:(PartialObjects["ActivityRef"] | undefined)[]
},
	["AgentOrder"]: {
	asc?:PartialObjects["AgentOrderable"],
	desc?:PartialObjects["AgentOrderable"],
	then?:PartialObjects["AgentOrder"]
},
	["AgentOrderable"]:AgentOrderable,
	["AgentRef"]: {
	id:string
},
	["Article"]: {
		__typename?: "Article";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			preview?:string,
			content?:string,
			movements?:(PartialObjects["Movement"] | undefined)[]
	},
	["ArticleFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["ArticleFilter"],
	or?:PartialObjects["ArticleFilter"],
	not?:PartialObjects["ArticleFilter"]
},
	["ArticleInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title:string,
	slug:string,
	preview:string,
	content:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["ArticleOrder"]: {
	asc?:PartialObjects["ArticleOrderable"],
	desc?:PartialObjects["ArticleOrderable"],
	then?:PartialObjects["ArticleOrder"]
},
	["ArticleOrderable"]:ArticleOrderable,
	["ArticleRef"]: {
	id:string
},
	["Candidate"]: {
		__typename?: "Candidate";
			firstName?:string,
			lastName?:string,
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			elections?:(PartialObjects["Election"] | undefined)[],
			platform?:string,
			movements?:(PartialObjects["Movement"] | undefined)[]
	},
	["CandidateFilter"]: {
	ids?:string[],
	not?:PartialObjects["CandidateFilter"]
},
	["CandidateInput"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	elections?:(PartialObjects["ElectionRef"] | undefined)[],
	platform?:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["CandidateOrder"]: {
	asc?:PartialObjects["CandidateOrderable"],
	desc?:PartialObjects["CandidateOrderable"],
	then?:PartialObjects["CandidateOrder"]
},
	["CandidateOrderable"]:CandidateOrderable,
	["CandidateRef"]: {
	id:string
},
	["Company"]: {
		__typename?: "Company";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			name?:string,
			slug?:string,
			boycotting?:(PartialObjects["Movement"] | undefined)[],
			supporting?:(PartialObjects["Movement"] | undefined)[]
	},
	["CompanyFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["CompanyFilter"],
	or?:PartialObjects["CompanyFilter"],
	not?:PartialObjects["CompanyFilter"]
},
	["CompanyInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	name:string,
	slug:string,
	boycotting?:(PartialObjects["MovementRef"] | undefined)[],
	supporting?:(PartialObjects["MovementRef"] | undefined)[]
},
	["CompanyOrder"]: {
	asc?:PartialObjects["CompanyOrderable"],
	desc?:PartialObjects["CompanyOrderable"],
	then?:PartialObjects["CompanyOrder"]
},
	["CompanyOrderable"]:CompanyOrderable,
	["CompanyRef"]: {
	id:string
},
	["Contact"]: {
		__typename?: "Contact";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			user?:PartialObjects["User"],
			movement?:PartialObjects["Movement"],
			phoneNumber?:string,
			email?:string,
			address?:string,
			notes?:(PartialObjects["Note"] | undefined)[],
			assignedAgents?:(PartialObjects["Agent"] | undefined)[]
	},
	["ContactFilter"]: {
	ids?:string[],
	not?:PartialObjects["ContactFilter"]
},
	["ContactInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user?:PartialObjects["UserRef"],
	movement?:PartialObjects["MovementRef"],
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(PartialObjects["NoteRef"] | undefined)[],
	assignedAgents?:(PartialObjects["AgentRef"] | undefined)[]
},
	["ContactOrder"]: {
	asc?:PartialObjects["ContactOrderable"],
	desc?:PartialObjects["ContactOrderable"],
	then?:PartialObjects["ContactOrder"]
},
	["ContactOrderable"]:ContactOrderable,
	["ContactRef"]: {
	id:string
},
	["DateTime"]:any,
	["DateTimeFilter"]: {
	eq?:PartialObjects["DateTime"],
	le?:PartialObjects["DateTime"],
	lt?:PartialObjects["DateTime"],
	ge?:PartialObjects["DateTime"],
	gt?:PartialObjects["DateTime"]
},
	["DeleteActivityPayload"]: {
		__typename?: "DeleteActivityPayload";
			msg?:string
	},
	["DeleteAgentPayload"]: {
		__typename?: "DeleteAgentPayload";
			msg?:string
	},
	["DeleteArticlePayload"]: {
		__typename?: "DeleteArticlePayload";
			msg?:string
	},
	["DeleteCandidatePayload"]: {
		__typename?: "DeleteCandidatePayload";
			msg?:string
	},
	["DeleteCompanyPayload"]: {
		__typename?: "DeleteCompanyPayload";
			msg?:string
	},
	["DeleteContactPayload"]: {
		__typename?: "DeleteContactPayload";
			msg?:string
	},
	["DeleteDonationPayload"]: {
		__typename?: "DeleteDonationPayload";
			msg?:string
	},
	["DeleteElectionPayload"]: {
		__typename?: "DeleteElectionPayload";
			msg?:string
	},
	["DeleteEventPayload"]: {
		__typename?: "DeleteEventPayload";
			msg?:string
	},
	["DeleteFundRaisingDrivePayload"]: {
		__typename?: "DeleteFundRaisingDrivePayload";
			msg?:string
	},
	["DeleteIssuePayload"]: {
		__typename?: "DeleteIssuePayload";
			msg?:string
	},
	["DeleteItemPayload"]: {
		__typename?: "DeleteItemPayload";
			msg?:string
	},
	["DeleteLandingPagePayload"]: {
		__typename?: "DeleteLandingPagePayload";
			msg?:string
	},
	["DeleteLayoutPayload"]: {
		__typename?: "DeleteLayoutPayload";
			msg?:string
	},
	["DeleteMovementPayload"]: {
		__typename?: "DeleteMovementPayload";
			msg?:string
	},
	["DeleteNotePayload"]: {
		__typename?: "DeleteNotePayload";
			msg?:string
	},
	["DeleteOpportunityPayload"]: {
		__typename?: "DeleteOpportunityPayload";
			msg?:string
	},
	["DeletePetitionPayload"]: {
		__typename?: "DeletePetitionPayload";
			msg?:string
	},
	["DeletePollPayload"]: {
		__typename?: "DeletePollPayload";
			msg?:string
	},
	["DeleteQuestionPayload"]: {
		__typename?: "DeleteQuestionPayload";
			msg?:string
	},
	["DeleteRespondantPayload"]: {
		__typename?: "DeleteRespondantPayload";
			msg?:string
	},
	["DeleteResponsePayload"]: {
		__typename?: "DeleteResponsePayload";
			msg?:string
	},
	["DeleteTagPayload"]: {
		__typename?: "DeleteTagPayload";
			msg?:string
	},
	["DeleteUserPayload"]: {
		__typename?: "DeleteUserPayload";
			msg?:string
	},
	["DgraphIndex"]:DgraphIndex,
	["Donation"]: {
		__typename?: "Donation";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			user?:PartialObjects["User"],
			fundRaisingDrive?:PartialObjects["FundRaisingDrive"],
			amountDollars?:number,
			amountCents?:number
	},
	["DonationFilter"]: {
	ids?:string[],
	not?:PartialObjects["DonationFilter"]
},
	["DonationInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user:PartialObjects["UserRef"],
	fundRaisingDrive:PartialObjects["FundRaisingDriveRef"],
	amountDollars?:number,
	amountCents?:number
},
	["DonationOrder"]: {
	asc?:PartialObjects["DonationOrderable"],
	desc?:PartialObjects["DonationOrderable"],
	then?:PartialObjects["DonationOrder"]
},
	["DonationOrderable"]:DonationOrderable,
	["DonationRef"]: {
	id:string
},
	["Election"]: {
		__typename?: "Election";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			date?:PartialObjects["DateTime"],
			description?:string,
			electionType?:PartialObjects["ElectionType"],
			candidates?:(PartialObjects["Candidate"] | undefined)[],
			issues?:(PartialObjects["Issue"] | undefined)[]
	},
	["ElectionFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["ElectionFilter"],
	or?:PartialObjects["ElectionFilter"],
	not?:PartialObjects["ElectionFilter"]
},
	["ElectionInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	date:PartialObjects["DateTime"],
	description?:string,
	electionType?:PartialObjects["ElectionType"],
	candidates?:(PartialObjects["CandidateRef"] | undefined)[],
	issues?:(PartialObjects["IssueRef"] | undefined)[]
},
	["ElectionOrder"]: {
	asc?:PartialObjects["ElectionOrderable"],
	desc?:PartialObjects["ElectionOrderable"],
	then?:PartialObjects["ElectionOrder"]
},
	["ElectionOrderable"]:ElectionOrderable,
	["ElectionRef"]: {
	id:string
},
	["ElectionType"]:ElectionType,
	["Event"]: {
		__typename?: "Event";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			date?:PartialObjects["DateTime"],
			description?:string,
			body?:string,
			movements?:(PartialObjects["Movement"] | undefined)[]
	},
	["EventFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["EventFilter"],
	or?:PartialObjects["EventFilter"],
	not?:PartialObjects["EventFilter"]
},
	["EventInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title:string,
	slug:string,
	date?:PartialObjects["DateTime"],
	description:string,
	body:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["EventOrder"]: {
	asc?:PartialObjects["EventOrderable"],
	desc?:PartialObjects["EventOrderable"],
	then?:PartialObjects["EventOrder"]
},
	["EventOrderable"]:EventOrderable,
	["EventRef"]: {
	id:string
},
	["FloatFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
},
	["FundRaisingDrive"]: {
		__typename?: "FundRaisingDrive";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			goalType?:PartialObjects["GoalType"],
			donations?:(PartialObjects["Donation"] | undefined)[],
			movement?:PartialObjects["Movement"]
	},
	["FundRaisingDriveFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["FundRaisingDriveFilter"],
	or?:PartialObjects["FundRaisingDriveFilter"],
	not?:PartialObjects["FundRaisingDriveFilter"]
},
	["FundRaisingDriveInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title:string,
	slug:string,
	goalType?:PartialObjects["GoalType"],
	donations?:(PartialObjects["DonationRef"] | undefined)[],
	movement:PartialObjects["MovementRef"]
},
	["FundRaisingDriveOrder"]: {
	asc?:PartialObjects["FundRaisingDriveOrderable"],
	desc?:PartialObjects["FundRaisingDriveOrderable"],
	then?:PartialObjects["FundRaisingDriveOrder"]
},
	["FundRaisingDriveOrderable"]:FundRaisingDriveOrderable,
	["FundRaisingDriveRef"]: {
	id:string
},
	["GoalType"]:GoalType,
	["IntFilter"]: {
	eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
},
	["Issue"]: {
		__typename?: "Issue";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			elections?:(PartialObjects["Election"] | undefined)[],
			summary?:string,
			content?:string,
			movements?:(PartialObjects["Movement"] | undefined)[]
	},
	["IssueFilter"]: {
	ids?:string[],
	not?:PartialObjects["IssueFilter"]
},
	["IssueInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	elections?:(PartialObjects["ElectionRef"] | undefined)[],
	summary?:string,
	content?:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["IssueOrder"]: {
	asc?:PartialObjects["IssueOrderable"],
	desc?:PartialObjects["IssueOrderable"],
	then?:PartialObjects["IssueOrder"]
},
	["IssueOrderable"]:IssueOrderable,
	["IssueRef"]: {
	id:string
},
	["Item"]:{
		id?:string;
	dateModified?:PartialObjects["DateTime"];
	datePublished?:PartialObjects["DateTime"]
} & (PartialObjects["Activity"] | PartialObjects["Agent"] | PartialObjects["Article"] | PartialObjects["Candidate"] | PartialObjects["Company"] | PartialObjects["Contact"] | PartialObjects["Donation"] | PartialObjects["Election"] | PartialObjects["Event"] | PartialObjects["FundRaisingDrive"] | PartialObjects["Issue"] | PartialObjects["LandingPage"] | PartialObjects["Layout"] | PartialObjects["Movement"] | PartialObjects["Note"] | PartialObjects["Opportunity"] | PartialObjects["Poll"] | PartialObjects["Question"] | PartialObjects["Respondant"] | PartialObjects["Response"] | PartialObjects["Tag"] | PartialObjects["User"]),
	["ItemFilter"]: {
	ids?:string[],
	not?:PartialObjects["ItemFilter"]
},
	["ItemOrder"]: {
	asc?:PartialObjects["ItemOrderable"],
	desc?:PartialObjects["ItemOrderable"],
	then?:PartialObjects["ItemOrder"]
},
	["ItemOrderable"]:ItemOrderable,
	["ItemRef"]: {
	id:string
},
	["LandingPage"]: {
		__typename?: "LandingPage";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			layout?:PartialObjects["Layout"]
	},
	["LandingPageFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["LandingPageFilter"],
	or?:PartialObjects["LandingPageFilter"],
	not?:PartialObjects["LandingPageFilter"]
},
	["LandingPageInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	layout?:PartialObjects["LayoutRef"]
},
	["LandingPageOrder"]: {
	asc?:PartialObjects["LandingPageOrderable"],
	desc?:PartialObjects["LandingPageOrderable"],
	then?:PartialObjects["LandingPageOrder"]
},
	["LandingPageOrderable"]:LandingPageOrderable,
	["LandingPageRef"]: {
	id:string
},
	["Layout"]: {
		__typename?: "Layout";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			landingPage?:(PartialObjects["LandingPage"] | undefined)[]
	},
	["LayoutFilter"]: {
	ids?:string[],
	not?:PartialObjects["LayoutFilter"]
},
	["LayoutInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	landingPage?:(PartialObjects["LandingPageRef"] | undefined)[]
},
	["LayoutOrder"]: {
	asc?:PartialObjects["LayoutOrderable"],
	desc?:PartialObjects["LayoutOrderable"],
	then?:PartialObjects["LayoutOrder"]
},
	["LayoutOrderable"]:LayoutOrderable,
	["LayoutRef"]: {
	id:string
},
	["Movement"]: {
		__typename?: "Movement";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			regionality?:PartialObjects["Regionality"],
			description?:string,
			tags?:(PartialObjects["Tag"] | undefined)[],
			owner?:PartialObjects["User"],
			homePage?:PartialObjects["LandingPage"],
			landingPages?:(PartialObjects["LandingPage"] | undefined)[],
			articles?:(PartialObjects["Article"] | undefined)[],
			supportingCompanies?:(PartialObjects["Company"] | undefined)[],
			boycottingCompanies?:(PartialObjects["Company"] | undefined)[],
			candidates?:(PartialObjects["Candidate"] | undefined)[],
			issues?:(PartialObjects["Issue"] | undefined)[],
			supporters?:(PartialObjects["User"] | undefined)[],
			friends?:(PartialObjects["Movement"] | undefined)[],
			events?:(PartialObjects["Event"] | undefined)[],
			opportunities?:(PartialObjects["Opportunity"] | undefined)[],
			petitions?:(PartialObjects["Petition"] | undefined)[],
			contacts?:(PartialObjects["Contact"] | undefined)[],
			polls?:(PartialObjects["Poll"] | undefined)[],
			fundRaisingDrives?:(PartialObjects["FundRaisingDrive"] | undefined)[],
			agents?:(PartialObjects["Agent"] | undefined)[]
	},
	["MovementFilter"]: {
	ids?:string[],
	title?:PartialObjects["StringTermFilter"],
	slug?:PartialObjects["StringHashFilter"],
	regionality?:PartialObjects["Regionality"],
	description?:PartialObjects["StringFullTextFilter"],
	and?:PartialObjects["MovementFilter"],
	or?:PartialObjects["MovementFilter"],
	not?:PartialObjects["MovementFilter"]
},
	["MovementInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	regionality?:PartialObjects["Regionality"],
	description?:string,
	tags?:(PartialObjects["TagRef"] | undefined)[],
	owner:PartialObjects["UserRef"],
	homePage?:PartialObjects["LandingPageRef"],
	landingPages?:(PartialObjects["LandingPageRef"] | undefined)[],
	articles?:(PartialObjects["ArticleRef"] | undefined)[],
	supportingCompanies?:(PartialObjects["CompanyRef"] | undefined)[],
	boycottingCompanies?:(PartialObjects["CompanyRef"] | undefined)[],
	candidates?:(PartialObjects["CandidateRef"] | undefined)[],
	issues?:(PartialObjects["IssueRef"] | undefined)[],
	supporters?:(PartialObjects["UserRef"] | undefined)[],
	friends?:(PartialObjects["MovementRef"] | undefined)[],
	events?:(PartialObjects["EventRef"] | undefined)[],
	opportunities?:(PartialObjects["OpportunityRef"] | undefined)[],
	contacts?:(PartialObjects["ContactRef"] | undefined)[],
	polls?:(PartialObjects["PollRef"] | undefined)[],
	fundRaisingDrives?:(PartialObjects["FundRaisingDriveRef"] | undefined)[],
	agents?:(PartialObjects["AgentRef"] | undefined)[]
},
	["MovementOrder"]: {
	asc?:PartialObjects["MovementOrderable"],
	desc?:PartialObjects["MovementOrderable"],
	then?:PartialObjects["MovementOrder"]
},
	["MovementOrderable"]:MovementOrderable,
	["MovementRef"]: {
	id:string
},
	["Mutation"]: {
		__typename?: "Mutation";
			updateItem?:PartialObjects["UpdateItemPayload"],
			deleteItem?:PartialObjects["DeleteItemPayload"],
			addUser?:PartialObjects["AddUserPayload"],
			updateUser?:PartialObjects["UpdateUserPayload"],
			deleteUser?:PartialObjects["DeleteUserPayload"],
			addMovement?:PartialObjects["AddMovementPayload"],
			updateMovement?:PartialObjects["UpdateMovementPayload"],
			deleteMovement?:PartialObjects["DeleteMovementPayload"],
			addLandingPage?:PartialObjects["AddLandingPagePayload"],
			updateLandingPage?:PartialObjects["UpdateLandingPagePayload"],
			deleteLandingPage?:PartialObjects["DeleteLandingPagePayload"],
			addLayout?:PartialObjects["AddLayoutPayload"],
			updateLayout?:PartialObjects["UpdateLayoutPayload"],
			deleteLayout?:PartialObjects["DeleteLayoutPayload"],
			addElection?:PartialObjects["AddElectionPayload"],
			updateElection?:PartialObjects["UpdateElectionPayload"],
			deleteElection?:PartialObjects["DeleteElectionPayload"],
			addCandidate?:PartialObjects["AddCandidatePayload"],
			updateCandidate?:PartialObjects["UpdateCandidatePayload"],
			deleteCandidate?:PartialObjects["DeleteCandidatePayload"],
			addIssue?:PartialObjects["AddIssuePayload"],
			updateIssue?:PartialObjects["UpdateIssuePayload"],
			deleteIssue?:PartialObjects["DeleteIssuePayload"],
			addCompany?:PartialObjects["AddCompanyPayload"],
			updateCompany?:PartialObjects["UpdateCompanyPayload"],
			deleteCompany?:PartialObjects["DeleteCompanyPayload"],
			addArticle?:PartialObjects["AddArticlePayload"],
			updateArticle?:PartialObjects["UpdateArticlePayload"],
			deleteArticle?:PartialObjects["DeleteArticlePayload"],
			addEvent?:PartialObjects["AddEventPayload"],
			updateEvent?:PartialObjects["UpdateEventPayload"],
			deleteEvent?:PartialObjects["DeleteEventPayload"],
			addOpportunity?:PartialObjects["AddOpportunityPayload"],
			updateOpportunity?:PartialObjects["UpdateOpportunityPayload"],
			deleteOpportunity?:PartialObjects["DeleteOpportunityPayload"],
			addPetition?:PartialObjects["AddPetitionPayload"],
			updatePetition?:PartialObjects["UpdatePetitionPayload"],
			deletePetition?:PartialObjects["DeletePetitionPayload"],
			addPoll?:PartialObjects["AddPollPayload"],
			updatePoll?:PartialObjects["UpdatePollPayload"],
			deletePoll?:PartialObjects["DeletePollPayload"],
			addRespondant?:PartialObjects["AddRespondantPayload"],
			updateRespondant?:PartialObjects["UpdateRespondantPayload"],
			deleteRespondant?:PartialObjects["DeleteRespondantPayload"],
			addQuestion?:PartialObjects["AddQuestionPayload"],
			updateQuestion?:PartialObjects["UpdateQuestionPayload"],
			deleteQuestion?:PartialObjects["DeleteQuestionPayload"],
			addResponse?:PartialObjects["AddResponsePayload"],
			updateResponse?:PartialObjects["UpdateResponsePayload"],
			deleteResponse?:PartialObjects["DeleteResponsePayload"],
			addTag?:PartialObjects["AddTagPayload"],
			updateTag?:PartialObjects["UpdateTagPayload"],
			deleteTag?:PartialObjects["DeleteTagPayload"],
			addFundRaisingDrive?:PartialObjects["AddFundRaisingDrivePayload"],
			updateFundRaisingDrive?:PartialObjects["UpdateFundRaisingDrivePayload"],
			deleteFundRaisingDrive?:PartialObjects["DeleteFundRaisingDrivePayload"],
			addDonation?:PartialObjects["AddDonationPayload"],
			updateDonation?:PartialObjects["UpdateDonationPayload"],
			deleteDonation?:PartialObjects["DeleteDonationPayload"],
			addAgent?:PartialObjects["AddAgentPayload"],
			updateAgent?:PartialObjects["UpdateAgentPayload"],
			deleteAgent?:PartialObjects["DeleteAgentPayload"],
			addNote?:PartialObjects["AddNotePayload"],
			updateNote?:PartialObjects["UpdateNotePayload"],
			deleteNote?:PartialObjects["DeleteNotePayload"],
			addActivity?:PartialObjects["AddActivityPayload"],
			updateActivity?:PartialObjects["UpdateActivityPayload"],
			deleteActivity?:PartialObjects["DeleteActivityPayload"],
			addContact?:PartialObjects["AddContactPayload"],
			updateContact?:PartialObjects["UpdateContactPayload"],
			deleteContact?:PartialObjects["DeleteContactPayload"]
	},
	["Note"]: {
		__typename?: "Note";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			agent?:PartialObjects["Agent"],
			contact?:PartialObjects["Contact"],
			text?:string
	},
	["NoteFilter"]: {
	ids?:string[],
	not?:PartialObjects["NoteFilter"]
},
	["NoteInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	agent?:PartialObjects["AgentRef"],
	contact?:PartialObjects["ContactRef"],
	text?:string
},
	["NoteOrder"]: {
	asc?:PartialObjects["NoteOrderable"],
	desc?:PartialObjects["NoteOrderable"],
	then?:PartialObjects["NoteOrder"]
},
	["NoteOrderable"]:NoteOrderable,
	["NoteRef"]: {
	id:string
},
	["Opportunity"]: {
		__typename?: "Opportunity";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			date?:PartialObjects["DateTime"],
			description?:string,
			body?:string,
			movement?:PartialObjects["Movement"],
			volunteers?:(PartialObjects["User"] | undefined)[]
	},
	["OpportunityFilter"]: {
	ids?:string[],
	not?:PartialObjects["OpportunityFilter"]
},
	["OpportunityInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title:string,
	slug:string,
	date?:PartialObjects["DateTime"],
	description:string,
	body:string,
	movement:PartialObjects["MovementRef"],
	volunteers?:(PartialObjects["UserRef"] | undefined)[]
},
	["OpportunityOrder"]: {
	asc?:PartialObjects["OpportunityOrderable"],
	desc?:PartialObjects["OpportunityOrderable"],
	then?:PartialObjects["OpportunityOrder"]
},
	["OpportunityOrderable"]:OpportunityOrderable,
	["OpportunityRef"]: {
	id:string
},
	["PatchActivity"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	agent?:PartialObjects["AgentRef"],
	user?:PartialObjects["UserRef"],
	text?:string
},
	["PatchAgent"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user?:PartialObjects["UserRef"],
	movement?:PartialObjects["MovementRef"],
	contacts?:(PartialObjects["ContactRef"] | undefined)[],
	notes?:(PartialObjects["NoteRef"] | undefined)[],
	activities?:(PartialObjects["ActivityRef"] | undefined)[]
},
	["PatchArticle"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	preview?:string,
	content?:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchCandidate"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	elections?:(PartialObjects["ElectionRef"] | undefined)[],
	platform?:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchCompany"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	name?:string,
	slug?:string,
	boycotting?:(PartialObjects["MovementRef"] | undefined)[],
	supporting?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchContact"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user?:PartialObjects["UserRef"],
	movement?:PartialObjects["MovementRef"],
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(PartialObjects["NoteRef"] | undefined)[],
	assignedAgents?:(PartialObjects["AgentRef"] | undefined)[]
},
	["PatchDonation"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user?:PartialObjects["UserRef"],
	fundRaisingDrive?:PartialObjects["FundRaisingDriveRef"],
	amountDollars?:number,
	amountCents?:number
},
	["PatchElection"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	date?:PartialObjects["DateTime"],
	description?:string,
	electionType?:PartialObjects["ElectionType"],
	candidates?:(PartialObjects["CandidateRef"] | undefined)[],
	issues?:(PartialObjects["IssueRef"] | undefined)[]
},
	["PatchEvent"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	date?:PartialObjects["DateTime"],
	description?:string,
	body?:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchFundRaisingDrive"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	goalType?:PartialObjects["GoalType"],
	donations?:(PartialObjects["DonationRef"] | undefined)[],
	movement?:PartialObjects["MovementRef"]
},
	["PatchIssue"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	elections?:(PartialObjects["ElectionRef"] | undefined)[],
	summary?:string,
	content?:string,
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchItem"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"]
},
	["PatchLandingPage"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	layout?:PartialObjects["LayoutRef"]
},
	["PatchLayout"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	landingPage?:(PartialObjects["LandingPageRef"] | undefined)[]
},
	["PatchMovement"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	regionality?:PartialObjects["Regionality"],
	description?:string,
	tags?:(PartialObjects["TagRef"] | undefined)[],
	owner?:PartialObjects["UserRef"],
	homePage?:PartialObjects["LandingPageRef"],
	landingPages?:(PartialObjects["LandingPageRef"] | undefined)[],
	articles?:(PartialObjects["ArticleRef"] | undefined)[],
	supportingCompanies?:(PartialObjects["CompanyRef"] | undefined)[],
	boycottingCompanies?:(PartialObjects["CompanyRef"] | undefined)[],
	candidates?:(PartialObjects["CandidateRef"] | undefined)[],
	issues?:(PartialObjects["IssueRef"] | undefined)[],
	supporters?:(PartialObjects["UserRef"] | undefined)[],
	friends?:(PartialObjects["MovementRef"] | undefined)[],
	events?:(PartialObjects["EventRef"] | undefined)[],
	opportunities?:(PartialObjects["OpportunityRef"] | undefined)[],
	contacts?:(PartialObjects["ContactRef"] | undefined)[],
	polls?:(PartialObjects["PollRef"] | undefined)[],
	fundRaisingDrives?:(PartialObjects["FundRaisingDriveRef"] | undefined)[],
	agents?:(PartialObjects["AgentRef"] | undefined)[]
},
	["PatchNote"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	agent?:PartialObjects["AgentRef"],
	contact?:PartialObjects["ContactRef"],
	text?:string
},
	["PatchOpportunity"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	date?:PartialObjects["DateTime"],
	description?:string,
	body?:string,
	movement?:PartialObjects["MovementRef"],
	volunteers?:(PartialObjects["UserRef"] | undefined)[]
},
	["PatchPetition"]: {
	title?:string,
	slug?:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(PartialObjects["UserRef"] | undefined)[],
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchPoll"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	slug?:string,
	respondants?:(PartialObjects["RespondantRef"] | undefined)[],
	questions?:PartialObjects["QuestionRef"],
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PatchQuestion"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	question?:string,
	choices?:(string | undefined)[]
},
	["PatchRespondant"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user?:PartialObjects["UserRef"],
	responses?:(PartialObjects["ResponseRef"] | undefined)[]
},
	["PatchResponse"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	respondant?:PartialObjects["RespondantRef"],
	question?:PartialObjects["QuestionRef"],
	answer?:string
},
	["PatchTag"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	description?:string,
	icon?:string
},
	["PatchUser"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	displayName?:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(PartialObjects["MovementRef"] | undefined)[],
	donationsMade?:(PartialObjects["FundRaisingDriveRef"] | undefined)[],
	supporting?:(PartialObjects["MovementRef"] | undefined)[],
	volunteeringAt?:(PartialObjects["OpportunityRef"] | undefined)[]
},
	["Person"]:{
		firstName?:string;
	lastName?:string
} & (PartialObjects["Candidate"] | PartialObjects["User"]),
	["PersonOrder"]: {
	asc?:PartialObjects["PersonOrderable"],
	desc?:PartialObjects["PersonOrderable"],
	then?:PartialObjects["PersonOrder"]
},
	["PersonOrderable"]:PersonOrderable,
	["Petition"]: {
		__typename?: "Petition";
			title?:string,
			slug?:string,
			description?:string,
			body?:string,
			goal?:number,
			signers?:(PartialObjects["User"] | undefined)[],
			movements?:(PartialObjects["Movement"] | undefined)[]
	},
	["PetitionFilter"]: {
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["PetitionFilter"],
	or?:PartialObjects["PetitionFilter"],
	not?:PartialObjects["PetitionFilter"]
},
	["PetitionInput"]: {
	title:string,
	slug:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(PartialObjects["UserRef"] | undefined)[],
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PetitionOrder"]: {
	asc?:PartialObjects["PetitionOrderable"],
	desc?:PartialObjects["PetitionOrderable"],
	then?:PartialObjects["PetitionOrder"]
},
	["PetitionOrderable"]:PetitionOrderable,
	["Poll"]: {
		__typename?: "Poll";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			slug?:string,
			respondants?:(PartialObjects["Respondant"] | undefined)[],
			questions?:PartialObjects["Question"],
			movements?:(PartialObjects["Movement"] | undefined)[]
	},
	["PollFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["PollFilter"],
	or?:PartialObjects["PollFilter"],
	not?:PartialObjects["PollFilter"]
},
	["PollInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title:string,
	slug:string,
	respondants?:(PartialObjects["RespondantRef"] | undefined)[],
	questions?:PartialObjects["QuestionRef"],
	movements?:(PartialObjects["MovementRef"] | undefined)[]
},
	["PollOrder"]: {
	asc?:PartialObjects["PollOrderable"],
	desc?:PartialObjects["PollOrderable"],
	then?:PartialObjects["PollOrder"]
},
	["PollOrderable"]:PollOrderable,
	["PollRef"]: {
	id:string
},
	["ProductType"]:ProductType,
	["Query"]: {
		__typename?: "Query";
			getItem?:PartialObjects["Item"],
			queryItem?:(PartialObjects["Item"] | undefined)[],
			queryPerson?:(PartialObjects["Person"] | undefined)[],
			getUser?:PartialObjects["User"],
			queryUser?:(PartialObjects["User"] | undefined)[],
			getMovement?:PartialObjects["Movement"],
			queryMovement?:(PartialObjects["Movement"] | undefined)[],
			getLandingPage?:PartialObjects["LandingPage"],
			queryLandingPage?:(PartialObjects["LandingPage"] | undefined)[],
			getLayout?:PartialObjects["Layout"],
			queryLayout?:(PartialObjects["Layout"] | undefined)[],
			getElection?:PartialObjects["Election"],
			queryElection?:(PartialObjects["Election"] | undefined)[],
			getCandidate?:PartialObjects["Candidate"],
			queryCandidate?:(PartialObjects["Candidate"] | undefined)[],
			getIssue?:PartialObjects["Issue"],
			queryIssue?:(PartialObjects["Issue"] | undefined)[],
			getCompany?:PartialObjects["Company"],
			queryCompany?:(PartialObjects["Company"] | undefined)[],
			getArticle?:PartialObjects["Article"],
			queryArticle?:(PartialObjects["Article"] | undefined)[],
			getEvent?:PartialObjects["Event"],
			queryEvent?:(PartialObjects["Event"] | undefined)[],
			getOpportunity?:PartialObjects["Opportunity"],
			queryOpportunity?:(PartialObjects["Opportunity"] | undefined)[],
			queryPetition?:(PartialObjects["Petition"] | undefined)[],
			getPoll?:PartialObjects["Poll"],
			queryPoll?:(PartialObjects["Poll"] | undefined)[],
			getRespondant?:PartialObjects["Respondant"],
			queryRespondant?:(PartialObjects["Respondant"] | undefined)[],
			getQuestion?:PartialObjects["Question"],
			queryQuestion?:(PartialObjects["Question"] | undefined)[],
			getResponse?:PartialObjects["Response"],
			queryResponse?:(PartialObjects["Response"] | undefined)[],
			getTag?:PartialObjects["Tag"],
			queryTag?:(PartialObjects["Tag"] | undefined)[],
			getFundRaisingDrive?:PartialObjects["FundRaisingDrive"],
			queryFundRaisingDrive?:(PartialObjects["FundRaisingDrive"] | undefined)[],
			getDonation?:PartialObjects["Donation"],
			queryDonation?:(PartialObjects["Donation"] | undefined)[],
			getAgent?:PartialObjects["Agent"],
			queryAgent?:(PartialObjects["Agent"] | undefined)[],
			getNote?:PartialObjects["Note"],
			queryNote?:(PartialObjects["Note"] | undefined)[],
			getActivity?:PartialObjects["Activity"],
			queryActivity?:(PartialObjects["Activity"] | undefined)[],
			getContact?:PartialObjects["Contact"],
			queryContact?:(PartialObjects["Contact"] | undefined)[]
	},
	["Question"]: {
		__typename?: "Question";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			question?:string,
			choices?:(string | undefined)[]
	},
	["QuestionFilter"]: {
	ids?:string[],
	not?:PartialObjects["QuestionFilter"]
},
	["QuestionInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	question?:string,
	choices?:(string | undefined)[]
},
	["QuestionOrder"]: {
	asc?:PartialObjects["QuestionOrderable"],
	desc?:PartialObjects["QuestionOrderable"],
	then?:PartialObjects["QuestionOrder"]
},
	["QuestionOrderable"]:QuestionOrderable,
	["QuestionRef"]: {
	id:string
},
	["Regionality"]:Regionality,
	["Respondant"]: {
		__typename?: "Respondant";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			user?:PartialObjects["User"],
			responses?:(PartialObjects["Response"] | undefined)[]
	},
	["RespondantFilter"]: {
	ids?:string[],
	not?:PartialObjects["RespondantFilter"]
},
	["RespondantInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	user:PartialObjects["UserRef"],
	responses?:(PartialObjects["ResponseRef"] | undefined)[]
},
	["RespondantOrder"]: {
	asc?:PartialObjects["RespondantOrderable"],
	desc?:PartialObjects["RespondantOrderable"],
	then?:PartialObjects["RespondantOrder"]
},
	["RespondantOrderable"]:RespondantOrderable,
	["RespondantRef"]: {
	id:string
},
	["Response"]: {
		__typename?: "Response";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			respondant?:PartialObjects["Respondant"],
			question?:PartialObjects["Question"],
			answer?:string
	},
	["ResponseFilter"]: {
	ids?:string[],
	not?:PartialObjects["ResponseFilter"]
},
	["ResponseInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	respondant?:PartialObjects["RespondantRef"],
	question?:PartialObjects["QuestionRef"],
	answer?:string
},
	["ResponseOrder"]: {
	asc?:PartialObjects["ResponseOrderable"],
	desc?:PartialObjects["ResponseOrderable"],
	then?:PartialObjects["ResponseOrder"]
},
	["ResponseOrderable"]:ResponseOrderable,
	["ResponseRef"]: {
	id:string
},
	["StringExactFilter"]: {
	eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string
},
	["StringFullTextFilter"]: {
	alloftext?:string,
	anyoftext?:string
},
	["StringHashFilter"]: {
	eq?:string
},
	["StringRegExpFilter"]: {
	regexp?:string
},
	["StringTermFilter"]: {
	allofterms?:string,
	anyofterms?:string
},
	["Tag"]: {
		__typename?: "Tag";
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			title?:string,
			description?:string,
			icon?:string
	},
	["TagFilter"]: {
	ids?:string[],
	not?:PartialObjects["TagFilter"]
},
	["TagInput"]: {
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	title?:string,
	description?:string,
	icon?:string
},
	["TagOrder"]: {
	asc?:PartialObjects["TagOrderable"],
	desc?:PartialObjects["TagOrderable"],
	then?:PartialObjects["TagOrder"]
},
	["TagOrderable"]:TagOrderable,
	["TagRef"]: {
	id:string
},
	["UpdateActivityInput"]: {
	filter:PartialObjects["ActivityFilter"],
	patch:PartialObjects["PatchActivity"]
},
	["UpdateActivityPayload"]: {
		__typename?: "UpdateActivityPayload";
			activity?:(PartialObjects["Activity"] | undefined)[]
	},
	["UpdateAgentInput"]: {
	filter:PartialObjects["AgentFilter"],
	patch:PartialObjects["PatchAgent"]
},
	["UpdateAgentPayload"]: {
		__typename?: "UpdateAgentPayload";
			agent?:(PartialObjects["Agent"] | undefined)[]
	},
	["UpdateArticleInput"]: {
	filter:PartialObjects["ArticleFilter"],
	patch:PartialObjects["PatchArticle"]
},
	["UpdateArticlePayload"]: {
		__typename?: "UpdateArticlePayload";
			article?:(PartialObjects["Article"] | undefined)[]
	},
	["UpdateCandidateInput"]: {
	filter:PartialObjects["CandidateFilter"],
	patch:PartialObjects["PatchCandidate"]
},
	["UpdateCandidatePayload"]: {
		__typename?: "UpdateCandidatePayload";
			candidate?:(PartialObjects["Candidate"] | undefined)[]
	},
	["UpdateCompanyInput"]: {
	filter:PartialObjects["CompanyFilter"],
	patch:PartialObjects["PatchCompany"]
},
	["UpdateCompanyPayload"]: {
		__typename?: "UpdateCompanyPayload";
			company?:(PartialObjects["Company"] | undefined)[]
	},
	["UpdateContactInput"]: {
	filter:PartialObjects["ContactFilter"],
	patch:PartialObjects["PatchContact"]
},
	["UpdateContactPayload"]: {
		__typename?: "UpdateContactPayload";
			contact?:(PartialObjects["Contact"] | undefined)[]
	},
	["UpdateDonationInput"]: {
	filter:PartialObjects["DonationFilter"],
	patch:PartialObjects["PatchDonation"]
},
	["UpdateDonationPayload"]: {
		__typename?: "UpdateDonationPayload";
			donation?:(PartialObjects["Donation"] | undefined)[]
	},
	["UpdateElectionInput"]: {
	filter:PartialObjects["ElectionFilter"],
	patch:PartialObjects["PatchElection"]
},
	["UpdateElectionPayload"]: {
		__typename?: "UpdateElectionPayload";
			election?:(PartialObjects["Election"] | undefined)[]
	},
	["UpdateEventInput"]: {
	filter:PartialObjects["EventFilter"],
	patch:PartialObjects["PatchEvent"]
},
	["UpdateEventPayload"]: {
		__typename?: "UpdateEventPayload";
			event?:(PartialObjects["Event"] | undefined)[]
	},
	["UpdateFundRaisingDriveInput"]: {
	filter:PartialObjects["FundRaisingDriveFilter"],
	patch:PartialObjects["PatchFundRaisingDrive"]
},
	["UpdateFundRaisingDrivePayload"]: {
		__typename?: "UpdateFundRaisingDrivePayload";
			fundraisingdrive?:(PartialObjects["FundRaisingDrive"] | undefined)[]
	},
	["UpdateIssueInput"]: {
	filter:PartialObjects["IssueFilter"],
	patch:PartialObjects["PatchIssue"]
},
	["UpdateIssuePayload"]: {
		__typename?: "UpdateIssuePayload";
			issue?:(PartialObjects["Issue"] | undefined)[]
	},
	["UpdateItemInput"]: {
	filter:PartialObjects["ItemFilter"],
	patch:PartialObjects["PatchItem"]
},
	["UpdateItemPayload"]: {
		__typename?: "UpdateItemPayload";
			item?:(PartialObjects["Item"] | undefined)[]
	},
	["UpdateLandingPageInput"]: {
	filter:PartialObjects["LandingPageFilter"],
	patch:PartialObjects["PatchLandingPage"]
},
	["UpdateLandingPagePayload"]: {
		__typename?: "UpdateLandingPagePayload";
			landingpage?:(PartialObjects["LandingPage"] | undefined)[]
	},
	["UpdateLayoutInput"]: {
	filter:PartialObjects["LayoutFilter"],
	patch:PartialObjects["PatchLayout"]
},
	["UpdateLayoutPayload"]: {
		__typename?: "UpdateLayoutPayload";
			layout?:(PartialObjects["Layout"] | undefined)[]
	},
	["UpdateMovementInput"]: {
	filter:PartialObjects["MovementFilter"],
	patch:PartialObjects["PatchMovement"]
},
	["UpdateMovementPayload"]: {
		__typename?: "UpdateMovementPayload";
			movement?:(PartialObjects["Movement"] | undefined)[]
	},
	["UpdateNoteInput"]: {
	filter:PartialObjects["NoteFilter"],
	patch:PartialObjects["PatchNote"]
},
	["UpdateNotePayload"]: {
		__typename?: "UpdateNotePayload";
			note?:(PartialObjects["Note"] | undefined)[]
	},
	["UpdateOpportunityInput"]: {
	filter:PartialObjects["OpportunityFilter"],
	patch:PartialObjects["PatchOpportunity"]
},
	["UpdateOpportunityPayload"]: {
		__typename?: "UpdateOpportunityPayload";
			opportunity?:(PartialObjects["Opportunity"] | undefined)[]
	},
	["UpdatePetitionInput"]: {
	filter:PartialObjects["PetitionFilter"],
	patch:PartialObjects["PatchPetition"]
},
	["UpdatePetitionPayload"]: {
		__typename?: "UpdatePetitionPayload";
			petition?:(PartialObjects["Petition"] | undefined)[]
	},
	["UpdatePollInput"]: {
	filter:PartialObjects["PollFilter"],
	patch:PartialObjects["PatchPoll"]
},
	["UpdatePollPayload"]: {
		__typename?: "UpdatePollPayload";
			poll?:(PartialObjects["Poll"] | undefined)[]
	},
	["UpdateQuestionInput"]: {
	filter:PartialObjects["QuestionFilter"],
	patch:PartialObjects["PatchQuestion"]
},
	["UpdateQuestionPayload"]: {
		__typename?: "UpdateQuestionPayload";
			question?:(PartialObjects["Question"] | undefined)[]
	},
	["UpdateRespondantInput"]: {
	filter:PartialObjects["RespondantFilter"],
	patch:PartialObjects["PatchRespondant"]
},
	["UpdateRespondantPayload"]: {
		__typename?: "UpdateRespondantPayload";
			respondant?:(PartialObjects["Respondant"] | undefined)[]
	},
	["UpdateResponseInput"]: {
	filter:PartialObjects["ResponseFilter"],
	patch:PartialObjects["PatchResponse"]
},
	["UpdateResponsePayload"]: {
		__typename?: "UpdateResponsePayload";
			response?:(PartialObjects["Response"] | undefined)[]
	},
	["UpdateTagInput"]: {
	filter:PartialObjects["TagFilter"],
	patch:PartialObjects["PatchTag"]
},
	["UpdateTagPayload"]: {
		__typename?: "UpdateTagPayload";
			tag?:(PartialObjects["Tag"] | undefined)[]
	},
	["UpdateUserInput"]: {
	filter:PartialObjects["UserFilter"],
	patch:PartialObjects["PatchUser"]
},
	["UpdateUserPayload"]: {
		__typename?: "UpdateUserPayload";
			user?:(PartialObjects["User"] | undefined)[]
	},
	["User"]: {
		__typename?: "User";
			firstName?:string,
			lastName?:string,
			id?:string,
			dateModified?:PartialObjects["DateTime"],
			datePublished?:PartialObjects["DateTime"],
			displayName?:string,
			slug?:string,
			bio?:string,
			movementsOwned?:(PartialObjects["Movement"] | undefined)[],
			donationsMade?:(PartialObjects["FundRaisingDrive"] | undefined)[],
			supporting?:(PartialObjects["Movement"] | undefined)[],
			volunteeringAt?:(PartialObjects["Opportunity"] | undefined)[]
	},
	["UserFilter"]: {
	ids?:string[],
	slug?:PartialObjects["StringHashFilter"],
	and?:PartialObjects["UserFilter"],
	or?:PartialObjects["UserFilter"],
	not?:PartialObjects["UserFilter"]
},
	["UserInput"]: {
	firstName?:string,
	lastName?:string,
	dateModified?:PartialObjects["DateTime"],
	datePublished?:PartialObjects["DateTime"],
	displayName:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(PartialObjects["MovementRef"] | undefined)[],
	donationsMade?:(PartialObjects["FundRaisingDriveRef"] | undefined)[],
	supporting?:(PartialObjects["MovementRef"] | undefined)[],
	volunteeringAt?:(PartialObjects["OpportunityRef"] | undefined)[]
},
	["UserOrder"]: {
	asc?:PartialObjects["UserOrderable"],
	desc?:PartialObjects["UserOrderable"],
	then?:PartialObjects["UserOrder"]
},
	["UserOrderable"]:UserOrderable,
	["UserRef"]: {
	id:string
}
  }





export type Activity = {
	__typename?: "Activity",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	agent?:Agent,
	user?:User,
	text?:string
}

export type ActivityFilter = {
		ids?:string[],
	not?:ActivityFilter
}

export type ActivityInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	agent?:AgentRef,
	user?:UserRef,
	text?:string
}

export type ActivityOrder = {
		asc?:ActivityOrderable,
	desc?:ActivityOrderable,
	then?:ActivityOrder
}

export enum ActivityOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	text = "text"
}

export type ActivityRef = {
		id:string
}

export type AddActivityPayload = {
	__typename?: "AddActivityPayload",
	activity?:Activity
}

export type AddAgentPayload = {
	__typename?: "AddAgentPayload",
	agent?:Agent
}

export type AddArticlePayload = {
	__typename?: "AddArticlePayload",
	article?:Article
}

export type AddCandidatePayload = {
	__typename?: "AddCandidatePayload",
	candidate?:Candidate
}

export type AddCompanyPayload = {
	__typename?: "AddCompanyPayload",
	company?:Company
}

export type AddContactPayload = {
	__typename?: "AddContactPayload",
	contact?:Contact
}

export type AddDonationPayload = {
	__typename?: "AddDonationPayload",
	donation?:Donation
}

export type AddElectionPayload = {
	__typename?: "AddElectionPayload",
	election?:Election
}

export type AddEventPayload = {
	__typename?: "AddEventPayload",
	event?:Event
}

export type AddFundRaisingDrivePayload = {
	__typename?: "AddFundRaisingDrivePayload",
	fundraisingdrive?:FundRaisingDrive
}

export type AddIssuePayload = {
	__typename?: "AddIssuePayload",
	issue?:Issue
}

export type AddLandingPagePayload = {
	__typename?: "AddLandingPagePayload",
	landingpage?:LandingPage
}

export type AddLayoutPayload = {
	__typename?: "AddLayoutPayload",
	layout?:Layout
}

export type AddMovementPayload = {
	__typename?: "AddMovementPayload",
	movement?:Movement
}

export type AddNotePayload = {
	__typename?: "AddNotePayload",
	note?:Note
}

export type AddOpportunityPayload = {
	__typename?: "AddOpportunityPayload",
	opportunity?:Opportunity
}

export type AddPetitionPayload = {
	__typename?: "AddPetitionPayload",
	petition?:Petition
}

export type AddPollPayload = {
	__typename?: "AddPollPayload",
	poll?:Poll
}

export type AddQuestionPayload = {
	__typename?: "AddQuestionPayload",
	question?:Question
}

export type AddRespondantPayload = {
	__typename?: "AddRespondantPayload",
	respondant?:Respondant
}

export type AddResponsePayload = {
	__typename?: "AddResponsePayload",
	response?:Response
}

export type AddTagPayload = {
	__typename?: "AddTagPayload",
	tag?:Tag
}

export type AddUserPayload = {
	__typename?: "AddUserPayload",
	user?:User
}

export type Agent = {
	__typename?: "Agent",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	user?:User,
	movement:Movement,
	contacts?:(Contact | undefined)[],
	notes?:(Note | undefined)[],
	activities?:(Activity | undefined)[]
}

export type AgentFilter = {
		ids?:string[],
	not?:AgentFilter
}

export type AgentInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user?:UserRef,
	movement:MovementRef,
	contacts?:(ContactRef | undefined)[],
	notes?:(NoteRef | undefined)[],
	activities?:(ActivityRef | undefined)[]
}

export type AgentOrder = {
		asc?:AgentOrderable,
	desc?:AgentOrderable,
	then?:AgentOrder
}

export enum AgentOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished"
}

export type AgentRef = {
		id:string
}

export type Article = {
	__typename?: "Article",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	preview:string,
	content:string,
	movements?:(Movement | undefined)[]
}

export type ArticleFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:ArticleFilter,
	or?:ArticleFilter,
	not?:ArticleFilter
}

export type ArticleInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	preview:string,
	content:string,
	movements?:(MovementRef | undefined)[]
}

export type ArticleOrder = {
		asc?:ArticleOrderable,
	desc?:ArticleOrderable,
	then?:ArticleOrder
}

export enum ArticleOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug",
	preview = "preview",
	content = "content"
}

export type ArticleRef = {
		id:string
}

export type Candidate = {
	__typename?: "Candidate",
	firstName?:string,
	lastName?:string,
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	elections?:(Election | undefined)[],
	platform?:string,
	movements?:(Movement | undefined)[]
}

export type CandidateFilter = {
		ids?:string[],
	not?:CandidateFilter
}

export type CandidateInput = {
		firstName?:string,
	lastName?:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	elections?:(ElectionRef | undefined)[],
	platform?:string,
	movements?:(MovementRef | undefined)[]
}

export type CandidateOrder = {
		asc?:CandidateOrderable,
	desc?:CandidateOrderable,
	then?:CandidateOrder
}

export enum CandidateOrderable {
	firstName = "firstName",
	lastName = "lastName",
	dateModified = "dateModified",
	datePublished = "datePublished",
	platform = "platform"
}

export type CandidateRef = {
		id:string
}

export type Company = {
	__typename?: "Company",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	name:string,
	slug:string,
	boycotting?:(Movement | undefined)[],
	supporting?:(Movement | undefined)[]
}

export type CompanyFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:CompanyFilter,
	or?:CompanyFilter,
	not?:CompanyFilter
}

export type CompanyInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	name:string,
	slug:string,
	boycotting?:(MovementRef | undefined)[],
	supporting?:(MovementRef | undefined)[]
}

export type CompanyOrder = {
		asc?:CompanyOrderable,
	desc?:CompanyOrderable,
	then?:CompanyOrder
}

export enum CompanyOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	name = "name",
	slug = "slug"
}

export type CompanyRef = {
		id:string
}

export type Contact = {
	__typename?: "Contact",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	user?:User,
	movement?:Movement,
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(Note | undefined)[],
	assignedAgents?:(Agent | undefined)[]
}

export type ContactFilter = {
		ids?:string[],
	not?:ContactFilter
}

export type ContactInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user?:UserRef,
	movement?:MovementRef,
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(NoteRef | undefined)[],
	assignedAgents?:(AgentRef | undefined)[]
}

export type ContactOrder = {
		asc?:ContactOrderable,
	desc?:ContactOrderable,
	then?:ContactOrder
}

export enum ContactOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	phoneNumber = "phoneNumber",
	email = "email",
	address = "address"
}

export type ContactRef = {
		id:string
}

export type DateTime = any

export type DateTimeFilter = {
		eq?:DateTime,
	le?:DateTime,
	lt?:DateTime,
	ge?:DateTime,
	gt?:DateTime
}

export type DeleteActivityPayload = {
	__typename?: "DeleteActivityPayload",
	msg?:string
}

export type DeleteAgentPayload = {
	__typename?: "DeleteAgentPayload",
	msg?:string
}

export type DeleteArticlePayload = {
	__typename?: "DeleteArticlePayload",
	msg?:string
}

export type DeleteCandidatePayload = {
	__typename?: "DeleteCandidatePayload",
	msg?:string
}

export type DeleteCompanyPayload = {
	__typename?: "DeleteCompanyPayload",
	msg?:string
}

export type DeleteContactPayload = {
	__typename?: "DeleteContactPayload",
	msg?:string
}

export type DeleteDonationPayload = {
	__typename?: "DeleteDonationPayload",
	msg?:string
}

export type DeleteElectionPayload = {
	__typename?: "DeleteElectionPayload",
	msg?:string
}

export type DeleteEventPayload = {
	__typename?: "DeleteEventPayload",
	msg?:string
}

export type DeleteFundRaisingDrivePayload = {
	__typename?: "DeleteFundRaisingDrivePayload",
	msg?:string
}

export type DeleteIssuePayload = {
	__typename?: "DeleteIssuePayload",
	msg?:string
}

export type DeleteItemPayload = {
	__typename?: "DeleteItemPayload",
	msg?:string
}

export type DeleteLandingPagePayload = {
	__typename?: "DeleteLandingPagePayload",
	msg?:string
}

export type DeleteLayoutPayload = {
	__typename?: "DeleteLayoutPayload",
	msg?:string
}

export type DeleteMovementPayload = {
	__typename?: "DeleteMovementPayload",
	msg?:string
}

export type DeleteNotePayload = {
	__typename?: "DeleteNotePayload",
	msg?:string
}

export type DeleteOpportunityPayload = {
	__typename?: "DeleteOpportunityPayload",
	msg?:string
}

export type DeletePetitionPayload = {
	__typename?: "DeletePetitionPayload",
	msg?:string
}

export type DeletePollPayload = {
	__typename?: "DeletePollPayload",
	msg?:string
}

export type DeleteQuestionPayload = {
	__typename?: "DeleteQuestionPayload",
	msg?:string
}

export type DeleteRespondantPayload = {
	__typename?: "DeleteRespondantPayload",
	msg?:string
}

export type DeleteResponsePayload = {
	__typename?: "DeleteResponsePayload",
	msg?:string
}

export type DeleteTagPayload = {
	__typename?: "DeleteTagPayload",
	msg?:string
}

export type DeleteUserPayload = {
	__typename?: "DeleteUserPayload",
	msg?:string
}

export enum DgraphIndex {
	int = "int",
	float = "float",
	bool = "bool",
	hash = "hash",
	exact = "exact",
	term = "term",
	fulltext = "fulltext",
	trigram = "trigram",
	regexp = "regexp",
	year = "year",
	month = "month",
	day = "day",
	hour = "hour"
}

export type Donation = {
	__typename?: "Donation",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	user:User,
	fundRaisingDrive:FundRaisingDrive,
	amountDollars?:number,
	amountCents?:number
}

export type DonationFilter = {
		ids?:string[],
	not?:DonationFilter
}

export type DonationInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user:UserRef,
	fundRaisingDrive:FundRaisingDriveRef,
	amountDollars?:number,
	amountCents?:number
}

export type DonationOrder = {
		asc?:DonationOrderable,
	desc?:DonationOrderable,
	then?:DonationOrder
}

export enum DonationOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	amountDollars = "amountDollars",
	amountCents = "amountCents"
}

export type DonationRef = {
		id:string
}

export type Election = {
	__typename?: "Election",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	date:DateTime,
	description?:string,
	electionType?:ElectionType,
	candidates?:(Candidate | undefined)[],
	issues?:(Issue | undefined)[]
}

export type ElectionFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:ElectionFilter,
	or?:ElectionFilter,
	not?:ElectionFilter
}

export type ElectionInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	date:DateTime,
	description?:string,
	electionType?:ElectionType,
	candidates?:(CandidateRef | undefined)[],
	issues?:(IssueRef | undefined)[]
}

export type ElectionOrder = {
		asc?:ElectionOrderable,
	desc?:ElectionOrderable,
	then?:ElectionOrder
}

export enum ElectionOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug",
	date = "date",
	description = "description"
}

export type ElectionRef = {
		id:string
}

export enum ElectionType {
	candidate = "candidate",
	issue = "issue"
}

export type Event = {
	__typename?: "Event",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	date?:DateTime,
	description:string,
	body:string,
	movements?:(Movement | undefined)[]
}

export type EventFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:EventFilter,
	or?:EventFilter,
	not?:EventFilter
}

export type EventInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	date?:DateTime,
	description:string,
	body:string,
	movements?:(MovementRef | undefined)[]
}

export type EventOrder = {
		asc?:EventOrderable,
	desc?:EventOrderable,
	then?:EventOrder
}

export enum EventOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug",
	date = "date",
	description = "description",
	body = "body"
}

export type EventRef = {
		id:string
}

export type FloatFilter = {
		eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
}

export type FundRaisingDrive = {
	__typename?: "FundRaisingDrive",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	goalType?:GoalType,
	donations?:(Donation | undefined)[],
	movement:Movement
}

export type FundRaisingDriveFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:FundRaisingDriveFilter,
	or?:FundRaisingDriveFilter,
	not?:FundRaisingDriveFilter
}

export type FundRaisingDriveInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	goalType?:GoalType,
	donations?:(DonationRef | undefined)[],
	movement:MovementRef
}

export type FundRaisingDriveOrder = {
		asc?:FundRaisingDriveOrderable,
	desc?:FundRaisingDriveOrderable,
	then?:FundRaisingDriveOrder
}

export enum FundRaisingDriveOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug"
}

export type FundRaisingDriveRef = {
		id:string
}

export enum GoalType {
	lifetimeValue = "lifetimeValue",
	recurringValue = "recurringValue",
	numberOfDonors = "numberOfDonors",
	perpetual = "perpetual"
}

export type IntFilter = {
		eq?:number,
	le?:number,
	lt?:number,
	ge?:number,
	gt?:number
}

export type Issue = {
	__typename?: "Issue",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	elections?:(Election | undefined)[],
	summary?:string,
	content?:string,
	movements?:(Movement | undefined)[]
}

export type IssueFilter = {
		ids?:string[],
	not?:IssueFilter
}

export type IssueInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	elections?:(ElectionRef | undefined)[],
	summary?:string,
	content?:string,
	movements?:(MovementRef | undefined)[]
}

export type IssueOrder = {
		asc?:IssueOrderable,
	desc?:IssueOrderable,
	then?:IssueOrder
}

export enum IssueOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	summary = "summary",
	content = "content"
}

export type IssueRef = {
		id:string
}

export type Item = {
	__interface:{
			id:string,
	dateModified?:DateTime,
	datePublished?:DateTime
	};
	__resolve:{
		['...on Activity']: Activity;
		['...on Agent']: Agent;
		['...on Article']: Article;
		['...on Candidate']: Candidate;
		['...on Company']: Company;
		['...on Contact']: Contact;
		['...on Donation']: Donation;
		['...on Election']: Election;
		['...on Event']: Event;
		['...on FundRaisingDrive']: FundRaisingDrive;
		['...on Issue']: Issue;
		['...on LandingPage']: LandingPage;
		['...on Layout']: Layout;
		['...on Movement']: Movement;
		['...on Note']: Note;
		['...on Opportunity']: Opportunity;
		['...on Poll']: Poll;
		['...on Question']: Question;
		['...on Respondant']: Respondant;
		['...on Response']: Response;
		['...on Tag']: Tag;
		['...on User']: User;
	}
}

export type ItemFilter = {
		ids?:string[],
	not?:ItemFilter
}

export type ItemOrder = {
		asc?:ItemOrderable,
	desc?:ItemOrderable,
	then?:ItemOrder
}

export enum ItemOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished"
}

export type ItemRef = {
		id:string
}

export type LandingPage = {
	__typename?: "LandingPage",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	layout?:Layout
}

export type LandingPageFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:LandingPageFilter,
	or?:LandingPageFilter,
	not?:LandingPageFilter
}

export type LandingPageInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	layout?:LayoutRef
}

export type LandingPageOrder = {
		asc?:LandingPageOrderable,
	desc?:LandingPageOrderable,
	then?:LandingPageOrder
}

export enum LandingPageOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug"
}

export type LandingPageRef = {
		id:string
}

export type Layout = {
	__typename?: "Layout",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	landingPage?:(LandingPage | undefined)[]
}

export type LayoutFilter = {
		ids?:string[],
	not?:LayoutFilter
}

export type LayoutInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	landingPage?:(LandingPageRef | undefined)[]
}

export type LayoutOrder = {
		asc?:LayoutOrderable,
	desc?:LayoutOrderable,
	then?:LayoutOrder
}

export enum LayoutOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished"
}

export type LayoutRef = {
		id:string
}

export type Movement = {
	__typename?: "Movement",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	regionality?:Regionality,
	description?:string,
	tags?:(Tag | undefined)[],
	owner:User,
	homePage?:LandingPage,
	landingPages?:(LandingPage | undefined)[],
	articles?:(Article | undefined)[],
	supportingCompanies?:(Company | undefined)[],
	boycottingCompanies?:(Company | undefined)[],
	candidates?:(Candidate | undefined)[],
	issues?:(Issue | undefined)[],
	supporters?:(User | undefined)[],
	friends?:(Movement | undefined)[],
	events?:(Event | undefined)[],
	opportunities?:(Opportunity | undefined)[],
	petitions?:(Petition | undefined)[],
	contacts?:(Contact | undefined)[],
	polls?:(Poll | undefined)[],
	fundRaisingDrives?:(FundRaisingDrive | undefined)[],
	agents?:(Agent | undefined)[]
}

export type MovementFilter = {
		ids?:string[],
	title?:StringTermFilter,
	slug?:StringHashFilter,
	regionality?:Regionality,
	description?:StringFullTextFilter,
	and?:MovementFilter,
	or?:MovementFilter,
	not?:MovementFilter
}

export type MovementInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	regionality?:Regionality,
	description?:string,
	tags?:(TagRef | undefined)[],
	owner:UserRef,
	homePage?:LandingPageRef,
	landingPages?:(LandingPageRef | undefined)[],
	articles?:(ArticleRef | undefined)[],
	supportingCompanies?:(CompanyRef | undefined)[],
	boycottingCompanies?:(CompanyRef | undefined)[],
	candidates?:(CandidateRef | undefined)[],
	issues?:(IssueRef | undefined)[],
	supporters?:(UserRef | undefined)[],
	friends?:(MovementRef | undefined)[],
	events?:(EventRef | undefined)[],
	opportunities?:(OpportunityRef | undefined)[],
	contacts?:(ContactRef | undefined)[],
	polls?:(PollRef | undefined)[],
	fundRaisingDrives?:(FundRaisingDriveRef | undefined)[],
	agents?:(AgentRef | undefined)[]
}

export type MovementOrder = {
		asc?:MovementOrderable,
	desc?:MovementOrderable,
	then?:MovementOrder
}

export enum MovementOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug",
	description = "description"
}

export type MovementRef = {
		id:string
}

export type Mutation = {
	__typename?: "Mutation",
	updateItem?:UpdateItemPayload,
	deleteItem?:DeleteItemPayload,
	addUser?:AddUserPayload,
	updateUser?:UpdateUserPayload,
	deleteUser?:DeleteUserPayload,
	addMovement?:AddMovementPayload,
	updateMovement?:UpdateMovementPayload,
	deleteMovement?:DeleteMovementPayload,
	addLandingPage?:AddLandingPagePayload,
	updateLandingPage?:UpdateLandingPagePayload,
	deleteLandingPage?:DeleteLandingPagePayload,
	addLayout?:AddLayoutPayload,
	updateLayout?:UpdateLayoutPayload,
	deleteLayout?:DeleteLayoutPayload,
	addElection?:AddElectionPayload,
	updateElection?:UpdateElectionPayload,
	deleteElection?:DeleteElectionPayload,
	addCandidate?:AddCandidatePayload,
	updateCandidate?:UpdateCandidatePayload,
	deleteCandidate?:DeleteCandidatePayload,
	addIssue?:AddIssuePayload,
	updateIssue?:UpdateIssuePayload,
	deleteIssue?:DeleteIssuePayload,
	addCompany?:AddCompanyPayload,
	updateCompany?:UpdateCompanyPayload,
	deleteCompany?:DeleteCompanyPayload,
	addArticle?:AddArticlePayload,
	updateArticle?:UpdateArticlePayload,
	deleteArticle?:DeleteArticlePayload,
	addEvent?:AddEventPayload,
	updateEvent?:UpdateEventPayload,
	deleteEvent?:DeleteEventPayload,
	addOpportunity?:AddOpportunityPayload,
	updateOpportunity?:UpdateOpportunityPayload,
	deleteOpportunity?:DeleteOpportunityPayload,
	addPetition?:AddPetitionPayload,
	updatePetition?:UpdatePetitionPayload,
	deletePetition?:DeletePetitionPayload,
	addPoll?:AddPollPayload,
	updatePoll?:UpdatePollPayload,
	deletePoll?:DeletePollPayload,
	addRespondant?:AddRespondantPayload,
	updateRespondant?:UpdateRespondantPayload,
	deleteRespondant?:DeleteRespondantPayload,
	addQuestion?:AddQuestionPayload,
	updateQuestion?:UpdateQuestionPayload,
	deleteQuestion?:DeleteQuestionPayload,
	addResponse?:AddResponsePayload,
	updateResponse?:UpdateResponsePayload,
	deleteResponse?:DeleteResponsePayload,
	addTag?:AddTagPayload,
	updateTag?:UpdateTagPayload,
	deleteTag?:DeleteTagPayload,
	addFundRaisingDrive?:AddFundRaisingDrivePayload,
	updateFundRaisingDrive?:UpdateFundRaisingDrivePayload,
	deleteFundRaisingDrive?:DeleteFundRaisingDrivePayload,
	addDonation?:AddDonationPayload,
	updateDonation?:UpdateDonationPayload,
	deleteDonation?:DeleteDonationPayload,
	addAgent?:AddAgentPayload,
	updateAgent?:UpdateAgentPayload,
	deleteAgent?:DeleteAgentPayload,
	addNote?:AddNotePayload,
	updateNote?:UpdateNotePayload,
	deleteNote?:DeleteNotePayload,
	addActivity?:AddActivityPayload,
	updateActivity?:UpdateActivityPayload,
	deleteActivity?:DeleteActivityPayload,
	addContact?:AddContactPayload,
	updateContact?:UpdateContactPayload,
	deleteContact?:DeleteContactPayload
}

export type Note = {
	__typename?: "Note",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	agent?:Agent,
	contact?:Contact,
	text?:string
}

export type NoteFilter = {
		ids?:string[],
	not?:NoteFilter
}

export type NoteInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	agent?:AgentRef,
	contact?:ContactRef,
	text?:string
}

export type NoteOrder = {
		asc?:NoteOrderable,
	desc?:NoteOrderable,
	then?:NoteOrder
}

export enum NoteOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	text = "text"
}

export type NoteRef = {
		id:string
}

export type Opportunity = {
	__typename?: "Opportunity",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	date?:DateTime,
	description:string,
	body:string,
	movement:Movement,
	volunteers?:(User | undefined)[]
}

export type OpportunityFilter = {
		ids?:string[],
	not?:OpportunityFilter
}

export type OpportunityInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	date?:DateTime,
	description:string,
	body:string,
	movement:MovementRef,
	volunteers?:(UserRef | undefined)[]
}

export type OpportunityOrder = {
		asc?:OpportunityOrderable,
	desc?:OpportunityOrderable,
	then?:OpportunityOrder
}

export enum OpportunityOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug",
	date = "date",
	description = "description",
	body = "body"
}

export type OpportunityRef = {
		id:string
}

export type PatchActivity = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	agent?:AgentRef,
	user?:UserRef,
	text?:string
}

export type PatchAgent = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user?:UserRef,
	movement?:MovementRef,
	contacts?:(ContactRef | undefined)[],
	notes?:(NoteRef | undefined)[],
	activities?:(ActivityRef | undefined)[]
}

export type PatchArticle = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	preview?:string,
	content?:string,
	movements?:(MovementRef | undefined)[]
}

export type PatchCandidate = {
		firstName?:string,
	lastName?:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	elections?:(ElectionRef | undefined)[],
	platform?:string,
	movements?:(MovementRef | undefined)[]
}

export type PatchCompany = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	name?:string,
	slug?:string,
	boycotting?:(MovementRef | undefined)[],
	supporting?:(MovementRef | undefined)[]
}

export type PatchContact = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user?:UserRef,
	movement?:MovementRef,
	phoneNumber?:string,
	email?:string,
	address?:string,
	notes?:(NoteRef | undefined)[],
	assignedAgents?:(AgentRef | undefined)[]
}

export type PatchDonation = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user?:UserRef,
	fundRaisingDrive?:FundRaisingDriveRef,
	amountDollars?:number,
	amountCents?:number
}

export type PatchElection = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	date?:DateTime,
	description?:string,
	electionType?:ElectionType,
	candidates?:(CandidateRef | undefined)[],
	issues?:(IssueRef | undefined)[]
}

export type PatchEvent = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	date?:DateTime,
	description?:string,
	body?:string,
	movements?:(MovementRef | undefined)[]
}

export type PatchFundRaisingDrive = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	goalType?:GoalType,
	donations?:(DonationRef | undefined)[],
	movement?:MovementRef
}

export type PatchIssue = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	elections?:(ElectionRef | undefined)[],
	summary?:string,
	content?:string,
	movements?:(MovementRef | undefined)[]
}

export type PatchItem = {
		dateModified?:DateTime,
	datePublished?:DateTime
}

export type PatchLandingPage = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	layout?:LayoutRef
}

export type PatchLayout = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	landingPage?:(LandingPageRef | undefined)[]
}

export type PatchMovement = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	regionality?:Regionality,
	description?:string,
	tags?:(TagRef | undefined)[],
	owner?:UserRef,
	homePage?:LandingPageRef,
	landingPages?:(LandingPageRef | undefined)[],
	articles?:(ArticleRef | undefined)[],
	supportingCompanies?:(CompanyRef | undefined)[],
	boycottingCompanies?:(CompanyRef | undefined)[],
	candidates?:(CandidateRef | undefined)[],
	issues?:(IssueRef | undefined)[],
	supporters?:(UserRef | undefined)[],
	friends?:(MovementRef | undefined)[],
	events?:(EventRef | undefined)[],
	opportunities?:(OpportunityRef | undefined)[],
	contacts?:(ContactRef | undefined)[],
	polls?:(PollRef | undefined)[],
	fundRaisingDrives?:(FundRaisingDriveRef | undefined)[],
	agents?:(AgentRef | undefined)[]
}

export type PatchNote = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	agent?:AgentRef,
	contact?:ContactRef,
	text?:string
}

export type PatchOpportunity = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	date?:DateTime,
	description?:string,
	body?:string,
	movement?:MovementRef,
	volunteers?:(UserRef | undefined)[]
}

export type PatchPetition = {
		title?:string,
	slug?:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(UserRef | undefined)[],
	movements?:(MovementRef | undefined)[]
}

export type PatchPoll = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	slug?:string,
	respondants?:(RespondantRef | undefined)[],
	questions?:QuestionRef,
	movements?:(MovementRef | undefined)[]
}

export type PatchQuestion = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	question?:string,
	choices?:(string | undefined)[]
}

export type PatchRespondant = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user?:UserRef,
	responses?:(ResponseRef | undefined)[]
}

export type PatchResponse = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	respondant?:RespondantRef,
	question?:QuestionRef,
	answer?:string
}

export type PatchTag = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	description?:string,
	icon?:string
}

export type PatchUser = {
		firstName?:string,
	lastName?:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	displayName?:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(MovementRef | undefined)[],
	donationsMade?:(FundRaisingDriveRef | undefined)[],
	supporting?:(MovementRef | undefined)[],
	volunteeringAt?:(OpportunityRef | undefined)[]
}

export type Person = {
	__interface:{
			firstName?:string,
	lastName?:string
	};
	__resolve:{
		['...on Candidate']: Candidate;
		['...on User']: User;
	}
}

export type PersonOrder = {
		asc?:PersonOrderable,
	desc?:PersonOrderable,
	then?:PersonOrder
}

export enum PersonOrderable {
	firstName = "firstName",
	lastName = "lastName"
}

export type Petition = {
	__typename?: "Petition",
	title:string,
	slug:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(User | undefined)[],
	movements?:(Movement | undefined)[]
}

export type PetitionFilter = {
		slug?:StringHashFilter,
	and?:PetitionFilter,
	or?:PetitionFilter,
	not?:PetitionFilter
}

export type PetitionInput = {
		title:string,
	slug:string,
	description?:string,
	body?:string,
	goal?:number,
	signers?:(UserRef | undefined)[],
	movements?:(MovementRef | undefined)[]
}

export type PetitionOrder = {
		asc?:PetitionOrderable,
	desc?:PetitionOrderable,
	then?:PetitionOrder
}

export enum PetitionOrderable {
	title = "title",
	slug = "slug",
	description = "description",
	body = "body",
	goal = "goal"
}

export type Poll = {
	__typename?: "Poll",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	respondants?:(Respondant | undefined)[],
	questions?:Question,
	movements?:(Movement | undefined)[]
}

export type PollFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:PollFilter,
	or?:PollFilter,
	not?:PollFilter
}

export type PollInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title:string,
	slug:string,
	respondants?:(RespondantRef | undefined)[],
	questions?:QuestionRef,
	movements?:(MovementRef | undefined)[]
}

export type PollOrder = {
		asc?:PollOrderable,
	desc?:PollOrderable,
	then?:PollOrder
}

export enum PollOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	slug = "slug"
}

export type PollRef = {
		id:string
}

export enum ProductType {
	digital = "digital",
	physical = "physical",
	subscription = "subscription"
}

export type Query = {
	__typename?: "Query",
	getItem?:Item,
	queryItem?:(Item | undefined)[],
	queryPerson?:(Person | undefined)[],
	getUser?:User,
	queryUser?:(User | undefined)[],
	getMovement?:Movement,
	queryMovement?:(Movement | undefined)[],
	getLandingPage?:LandingPage,
	queryLandingPage?:(LandingPage | undefined)[],
	getLayout?:Layout,
	queryLayout?:(Layout | undefined)[],
	getElection?:Election,
	queryElection?:(Election | undefined)[],
	getCandidate?:Candidate,
	queryCandidate?:(Candidate | undefined)[],
	getIssue?:Issue,
	queryIssue?:(Issue | undefined)[],
	getCompany?:Company,
	queryCompany?:(Company | undefined)[],
	getArticle?:Article,
	queryArticle?:(Article | undefined)[],
	getEvent?:Event,
	queryEvent?:(Event | undefined)[],
	getOpportunity?:Opportunity,
	queryOpportunity?:(Opportunity | undefined)[],
	queryPetition?:(Petition | undefined)[],
	getPoll?:Poll,
	queryPoll?:(Poll | undefined)[],
	getRespondant?:Respondant,
	queryRespondant?:(Respondant | undefined)[],
	getQuestion?:Question,
	queryQuestion?:(Question | undefined)[],
	getResponse?:Response,
	queryResponse?:(Response | undefined)[],
	getTag?:Tag,
	queryTag?:(Tag | undefined)[],
	getFundRaisingDrive?:FundRaisingDrive,
	queryFundRaisingDrive?:(FundRaisingDrive | undefined)[],
	getDonation?:Donation,
	queryDonation?:(Donation | undefined)[],
	getAgent?:Agent,
	queryAgent?:(Agent | undefined)[],
	getNote?:Note,
	queryNote?:(Note | undefined)[],
	getActivity?:Activity,
	queryActivity?:(Activity | undefined)[],
	getContact?:Contact,
	queryContact?:(Contact | undefined)[]
}

export type Question = {
	__typename?: "Question",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	question?:string,
	choices?:(string | undefined)[]
}

export type QuestionFilter = {
		ids?:string[],
	not?:QuestionFilter
}

export type QuestionInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	question?:string,
	choices?:(string | undefined)[]
}

export type QuestionOrder = {
		asc?:QuestionOrderable,
	desc?:QuestionOrderable,
	then?:QuestionOrder
}

export enum QuestionOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	question = "question",
	choices = "choices"
}

export type QuestionRef = {
		id:string
}

export enum Regionality {
	city = "city",
	state = "state",
	nation = "nation",
	world = "world"
}

export type Respondant = {
	__typename?: "Respondant",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	user:User,
	responses?:(Response | undefined)[]
}

export type RespondantFilter = {
		ids?:string[],
	not?:RespondantFilter
}

export type RespondantInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	user:UserRef,
	responses?:(ResponseRef | undefined)[]
}

export type RespondantOrder = {
		asc?:RespondantOrderable,
	desc?:RespondantOrderable,
	then?:RespondantOrder
}

export enum RespondantOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished"
}

export type RespondantRef = {
		id:string
}

export type Response = {
	__typename?: "Response",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	respondant?:Respondant,
	question?:Question,
	answer?:string
}

export type ResponseFilter = {
		ids?:string[],
	not?:ResponseFilter
}

export type ResponseInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	respondant?:RespondantRef,
	question?:QuestionRef,
	answer?:string
}

export type ResponseOrder = {
		asc?:ResponseOrderable,
	desc?:ResponseOrderable,
	then?:ResponseOrder
}

export enum ResponseOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	answer = "answer"
}

export type ResponseRef = {
		id:string
}

export type StringExactFilter = {
		eq?:string,
	le?:string,
	lt?:string,
	ge?:string,
	gt?:string
}

export type StringFullTextFilter = {
		alloftext?:string,
	anyoftext?:string
}

export type StringHashFilter = {
		eq?:string
}

export type StringRegExpFilter = {
		regexp?:string
}

export type StringTermFilter = {
		allofterms?:string,
	anyofterms?:string
}

export type Tag = {
	__typename?: "Tag",
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	description?:string,
	icon?:string
}

export type TagFilter = {
		ids?:string[],
	not?:TagFilter
}

export type TagInput = {
		dateModified?:DateTime,
	datePublished?:DateTime,
	title?:string,
	description?:string,
	icon?:string
}

export type TagOrder = {
		asc?:TagOrderable,
	desc?:TagOrderable,
	then?:TagOrder
}

export enum TagOrderable {
	dateModified = "dateModified",
	datePublished = "datePublished",
	title = "title",
	description = "description",
	icon = "icon"
}

export type TagRef = {
		id:string
}

export type UpdateActivityInput = {
		filter:ActivityFilter,
	patch:PatchActivity
}

export type UpdateActivityPayload = {
	__typename?: "UpdateActivityPayload",
	activity?:(Activity | undefined)[]
}

export type UpdateAgentInput = {
		filter:AgentFilter,
	patch:PatchAgent
}

export type UpdateAgentPayload = {
	__typename?: "UpdateAgentPayload",
	agent?:(Agent | undefined)[]
}

export type UpdateArticleInput = {
		filter:ArticleFilter,
	patch:PatchArticle
}

export type UpdateArticlePayload = {
	__typename?: "UpdateArticlePayload",
	article?:(Article | undefined)[]
}

export type UpdateCandidateInput = {
		filter:CandidateFilter,
	patch:PatchCandidate
}

export type UpdateCandidatePayload = {
	__typename?: "UpdateCandidatePayload",
	candidate?:(Candidate | undefined)[]
}

export type UpdateCompanyInput = {
		filter:CompanyFilter,
	patch:PatchCompany
}

export type UpdateCompanyPayload = {
	__typename?: "UpdateCompanyPayload",
	company?:(Company | undefined)[]
}

export type UpdateContactInput = {
		filter:ContactFilter,
	patch:PatchContact
}

export type UpdateContactPayload = {
	__typename?: "UpdateContactPayload",
	contact?:(Contact | undefined)[]
}

export type UpdateDonationInput = {
		filter:DonationFilter,
	patch:PatchDonation
}

export type UpdateDonationPayload = {
	__typename?: "UpdateDonationPayload",
	donation?:(Donation | undefined)[]
}

export type UpdateElectionInput = {
		filter:ElectionFilter,
	patch:PatchElection
}

export type UpdateElectionPayload = {
	__typename?: "UpdateElectionPayload",
	election?:(Election | undefined)[]
}

export type UpdateEventInput = {
		filter:EventFilter,
	patch:PatchEvent
}

export type UpdateEventPayload = {
	__typename?: "UpdateEventPayload",
	event?:(Event | undefined)[]
}

export type UpdateFundRaisingDriveInput = {
		filter:FundRaisingDriveFilter,
	patch:PatchFundRaisingDrive
}

export type UpdateFundRaisingDrivePayload = {
	__typename?: "UpdateFundRaisingDrivePayload",
	fundraisingdrive?:(FundRaisingDrive | undefined)[]
}

export type UpdateIssueInput = {
		filter:IssueFilter,
	patch:PatchIssue
}

export type UpdateIssuePayload = {
	__typename?: "UpdateIssuePayload",
	issue?:(Issue | undefined)[]
}

export type UpdateItemInput = {
		filter:ItemFilter,
	patch:PatchItem
}

export type UpdateItemPayload = {
	__typename?: "UpdateItemPayload",
	item?:(Item | undefined)[]
}

export type UpdateLandingPageInput = {
		filter:LandingPageFilter,
	patch:PatchLandingPage
}

export type UpdateLandingPagePayload = {
	__typename?: "UpdateLandingPagePayload",
	landingpage?:(LandingPage | undefined)[]
}

export type UpdateLayoutInput = {
		filter:LayoutFilter,
	patch:PatchLayout
}

export type UpdateLayoutPayload = {
	__typename?: "UpdateLayoutPayload",
	layout?:(Layout | undefined)[]
}

export type UpdateMovementInput = {
		filter:MovementFilter,
	patch:PatchMovement
}

export type UpdateMovementPayload = {
	__typename?: "UpdateMovementPayload",
	movement?:(Movement | undefined)[]
}

export type UpdateNoteInput = {
		filter:NoteFilter,
	patch:PatchNote
}

export type UpdateNotePayload = {
	__typename?: "UpdateNotePayload",
	note?:(Note | undefined)[]
}

export type UpdateOpportunityInput = {
		filter:OpportunityFilter,
	patch:PatchOpportunity
}

export type UpdateOpportunityPayload = {
	__typename?: "UpdateOpportunityPayload",
	opportunity?:(Opportunity | undefined)[]
}

export type UpdatePetitionInput = {
		filter:PetitionFilter,
	patch:PatchPetition
}

export type UpdatePetitionPayload = {
	__typename?: "UpdatePetitionPayload",
	petition?:(Petition | undefined)[]
}

export type UpdatePollInput = {
		filter:PollFilter,
	patch:PatchPoll
}

export type UpdatePollPayload = {
	__typename?: "UpdatePollPayload",
	poll?:(Poll | undefined)[]
}

export type UpdateQuestionInput = {
		filter:QuestionFilter,
	patch:PatchQuestion
}

export type UpdateQuestionPayload = {
	__typename?: "UpdateQuestionPayload",
	question?:(Question | undefined)[]
}

export type UpdateRespondantInput = {
		filter:RespondantFilter,
	patch:PatchRespondant
}

export type UpdateRespondantPayload = {
	__typename?: "UpdateRespondantPayload",
	respondant?:(Respondant | undefined)[]
}

export type UpdateResponseInput = {
		filter:ResponseFilter,
	patch:PatchResponse
}

export type UpdateResponsePayload = {
	__typename?: "UpdateResponsePayload",
	response?:(Response | undefined)[]
}

export type UpdateTagInput = {
		filter:TagFilter,
	patch:PatchTag
}

export type UpdateTagPayload = {
	__typename?: "UpdateTagPayload",
	tag?:(Tag | undefined)[]
}

export type UpdateUserInput = {
		filter:UserFilter,
	patch:PatchUser
}

export type UpdateUserPayload = {
	__typename?: "UpdateUserPayload",
	user?:(User | undefined)[]
}

export type User = {
	__typename?: "User",
	firstName?:string,
	lastName?:string,
	id:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	displayName:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(Movement | undefined)[],
	donationsMade?:(FundRaisingDrive | undefined)[],
	supporting?:(Movement | undefined)[],
	volunteeringAt?:(Opportunity | undefined)[]
}

export type UserFilter = {
		ids?:string[],
	slug?:StringHashFilter,
	and?:UserFilter,
	or?:UserFilter,
	not?:UserFilter
}

export type UserInput = {
		firstName?:string,
	lastName?:string,
	dateModified?:DateTime,
	datePublished?:DateTime,
	displayName:string,
	slug?:string,
	bio?:string,
	movementsOwned?:(MovementRef | undefined)[],
	donationsMade?:(FundRaisingDriveRef | undefined)[],
	supporting?:(MovementRef | undefined)[],
	volunteeringAt?:(OpportunityRef | undefined)[]
}

export type UserOrder = {
		asc?:UserOrderable,
	desc?:UserOrderable,
	then?:UserOrder
}

export enum UserOrderable {
	firstName = "firstName",
	lastName = "lastName",
	dateModified = "dateModified",
	datePublished = "datePublished",
	displayName = "displayName",
	slug = "slug",
	bio = "bio"
}

export type UserRef = {
		id:string
}


type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};

type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};

export type ResolverType<F> = F extends Func<infer P, any> ? P[0] : undefined;

export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;

interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
export type MapInterface<SRC, DST> = SRC extends {
  __interface: infer INTERFACE;
  __resolve: infer IMPLEMENTORS;
}
  ? ObjectToUnion<
      Omit<
        {
          [Key in keyof Omit<DST, keyof INTERFACE | '__typename'>]: Key extends keyof IMPLEMENTORS
            ? MapType<IMPLEMENTORS[Key], DST[Key]> &
                Omit<
                  {
                    [Key in keyof Omit<
                      DST,
                      keyof IMPLEMENTORS | '__typename'
                    >]: Key extends keyof INTERFACE
                      ? LastMapTypeSRCResolver<INTERFACE[Key], DST[Key]>
                      : never;
                  },
                  keyof IMPLEMENTORS
                > &
                (DST extends { __typename: any }
                  ? MapType<IMPLEMENTORS[Key], { __typename: true }>
                  : {})
            : never;
        },
        keyof INTERFACE | '__typename'
      >
    >
  : never;

export type ValueToUnion<T> = T extends {
  __typename: infer R;
}
  ? {
      [P in keyof Omit<T, '__typename'>]: T[P] & {
        __typename: R;
      };
    }
  : T;

export type ObjectToUnion<T> = {
  [P in keyof T]: T[P];
}[keyof T];

type Anify<T> = { [P in keyof T]?: any };


type LastMapTypeSRCResolver<SRC, DST> = SRC extends undefined
  ? never
  : SRC extends Array<infer AR>
  ? LastMapTypeSRCResolver<AR, DST>[]
  : SRC extends { __interface: any; __resolve: any }
  ? MapInterface<SRC, DST>
  : SRC extends { __union: any; __resolve: infer RESOLVE }
  ? ObjectToUnion<MapType<RESOLVE, ValueToUnion<DST>>>
  : DST extends boolean
  ? SRC
  : MapType<SRC, DST>;

type MapType<SRC extends Anify<DST>, DST> = DST extends boolean
  ? SRC
  : DST extends {
      __alias: any;
    }
  ? {
      [A in keyof DST["__alias"]]: Required<SRC> extends Anify<
        DST["__alias"][A]
      >
        ? MapType<Required<SRC>, DST["__alias"][A]>
        : never;
    } &
      {
        [Key in keyof Omit<DST, "__alias">]: DST[Key] extends [
          any,
          infer PAYLOAD
        ]
          ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
          : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
      }
  : {
      [Key in keyof DST]: DST[Key] extends [any, infer PAYLOAD]
        ? LastMapTypeSRCResolver<SRC[Key], PAYLOAD>
        : LastMapTypeSRCResolver<SRC[Key], DST[Key]>;
    };

type OperationToGraphQL<V, T> = <Z>(o: Z | V) => Promise<MapType<T, Z>>;

type CastToGraphQL<V, T> = (
  resultOfYourQuery: any
) => <Z>(o: Z | V) => MapType<T, Z>;

type fetchOptions = ArgsType<typeof fetch>;

export type SelectionFunction<V> = <T>(t: T | V) => T;


export declare function Chain(
  ...options: fetchOptions
):{
  Query: OperationToGraphQL<ValueTypes["Query"],Query>,Mutation: OperationToGraphQL<ValueTypes["Mutation"],Mutation>
}

export declare const Zeus: {
  Query: (o: ValueTypes["Query"]) => string,Mutation: (o: ValueTypes["Mutation"]) => string
}

export declare const Cast: {
  Query: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Query"],
  Query
>,Mutation: ((o: any) => (b: any) => o) as CastToGraphQL<
  ValueTypes["Mutation"],
  Mutation
>
}

export declare const Gql: ReturnType<typeof Chain>
