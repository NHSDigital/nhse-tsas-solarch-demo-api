var client_id = context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.client_id');

if (!client_id || client_id === "" || client_id === null) {
    // No products associated with the app, deny access
    context.setVariable("enhanced-hasPostedAccessToken", "false");
    context.setVariable("enhanced-introspectClientId", "UNKNOWN");
    context.setVariable("enhanced-apiProductList", "UNKNOWN");
    context.setVariable("enhanced-status", "UNKNOWN");
    context.setVariable("enhanced-expiresIn", "UNKNOWN");
}
else {
    context.setVariable("enhanced-hasPostedAccessToken", "true");
    context.setVariable("enhanced-introspectClientId", client_id);
    context.setVariable("enhanced-apiProductList", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.api_product_list'));
    context.setVariable("enhanced-status", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.status'));
    context.setVariable("enhanced-expiresIn", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.expires_in'));
}