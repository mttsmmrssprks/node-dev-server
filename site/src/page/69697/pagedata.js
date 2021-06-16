(function(){

	var en = {};

	en.dependencies = [{"conditions":[{"condition":"AND","target":"field:791623","comparator":"==","value":"PayPal"}],"actions":[{"type":"showHide","display":"Hide","target":"field:791624"},{"type":"showHide","display":"Hide","target":"field:791625"},{"type":"showHide","display":"Hide","target":"field:791627"},{"type":"showHide","display":"Hide","target":"field:791626"}]}];

	en.altLists = [];

	en.validators = [{"componentId":768052,"format":"","errorMessage":"Address 1 is a mandatory form field.","type":"REQ"},{"componentId":768054,"format":"","errorMessage":"City is a mandatory form field.","type":"REQ"},{"componentId":768056,"format":"","errorMessage":"Postcode is a mandatory form field.","type":"REQ"},{"componentId":825754,"format":"","errorMessage":"Country is a mandatory form field.","type":"REQ"},{"componentId":788599,"format":"2~5000","errorMessage":"The minimum donation amount is Â£2.","type":"AMNT"},{"componentId":788601,"format":"","errorMessage":"Payment reference number is a mandatory form field.","type":"REQ"},{"componentId":791555,"format":"","errorMessage":"Title is a mandatory form field.","type":"REQ"},{"componentId":791556,"format":"","errorMessage":"First Name is a mandatory form field.","type":"REQ"},{"componentId":791558,"format":null,"errorMessage":"Please enter a valid email address","type":"EMAL"},{"componentId":791559,"format":"","errorMessage":"Last Name is a mandatory form field.","type":"REQ"},{"componentId":791560,"format":"^[0-9+]*$","errorMessage":"Please enter numbers only with no spaces","type":"CUST"},{"componentId":791623,"format":"","errorMessage":"Payment Type is a mandatory form field.","type":"REQ"},{"componentId":791624,"format":"","errorMessage":"Card Holder Name is a mandatory form field.","type":"REQ"},{"componentId":791625,"format":"^([0-9]{13,19})$","errorMessage":"Please check your card number","type":"CUST"},{"componentId":791626,"format":"^[0-9+]*$","errorMessage":"Please enter numbers only with no spaces","type":"CUST"},{"componentId":791627,"format":"","errorMessage":"Expiry Date is a mandatory form field.","type":"REQ"},{"componentId":791628,"format":"","errorMessage":"Payment Currency is a mandatory form field.","type":"REQ"},{"componentId":142794,"format":"","errorMessage":"I'm happy to be contacted by email: is a mandatory form field.","type":"REQ"},{"componentId":142798,"format":"","errorMessage":"I'm happy to be contacted by text:\n is a mandatory form field.","type":"REQ"},{"componentId":881136,"format":"","errorMessage":"<span>Please confirm that <strong>you are donating &pound;<span id=\"donationAmountConfirmation\">25</span></strong><span id=\"donationAmountConfirmationGA\"> [plus Gift Aid]</span> to help keep hope alive for vulnerable young people</span>\n is a mandatory form field.","type":"REQ"}];

	en.alerts = [{"type":"MFE","content":"is a mandatory form field."},{"type":"GPE","content":"This transaction has failed as there has been an error in processing your payment."}];

	en.premiumGifts = {};

    en.paymentGateways = [{"country":"GB","accountId":"acct_1HFi3OFUk5OuCrmz","currency":null,"gateway":"stripe","key":"pk_live_51H3L9vEh71zMukUlZ51TUkmQd8PNvOO70RjDaSQMwOlliAZ5S5YtRgtuzSmKIvxRj0LcDai2JbugPEC8y5ypgADa00H85wPNhq"}];

    en.feeCover = {};

	window.EngagingNetworks = en;

})()