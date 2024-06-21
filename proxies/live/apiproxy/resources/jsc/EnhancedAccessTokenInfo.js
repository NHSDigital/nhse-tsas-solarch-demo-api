var client_id = context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.client_id');

if (!client_id || client_id === "" || client_id === null) {
    // No products associated with the app, deny access
    context.setVariable("enhanced-introspect-hasPostedAccessToken", "false");
    context.setVariable("enhanced-introspect-clientId", "UNKNOWN");
    context.setVariable("enhanced-introspect-apiProductList", "UNKNOWN");
    context.setVariable("enhanced-introspect-status", "UNKNOWN");
    context.setVariable("enhanced-introspect-expiresIn", "UNKNOWN");
    context.setVariable("enhanced-introspect-scope", "UNKNOWN");
    context.setVariable("enhanced-introspect-access-token", "UNKNOWN");
}
else {
    context.setVariable("enhanced-introspect-hasPostedAccessToken", "true");
    context.setVariable("enhanced-introspect-clientId", client_id);
    context.setVariable("enhanced-introspect-apiProductList", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.api_product_list'));
    context.setVariable("enhanced-introspect-status", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.status'));
    context.setVariable("enhanced-introspect-expiresIn", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.expires_in'));
    context.setVariable("enhanced-introspect-scope", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.scope'));
    context.setVariable("enhanced-introspect-access-token", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.access_token'));
    context.setVariable("enhanced-introspect-accesstoken", context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.accesstoken').toString());
}