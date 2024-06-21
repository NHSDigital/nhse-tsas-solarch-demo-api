var client_id = context.getVariable('oauthv2accesstoken.GetOAuthV2Info1.client_id');

if (!client_id || client_id === "" || client_id === null) {
    // No products associated with the app, deny access
    context.setVariable("hasPostedAccessToken", "false");
    context.setVariable("introspectClientId", client_id);
}
else {
    context.setVariable("hasPostedAccessToken", "true");
    context.setVariable("introspectClientId", "UNKNOWN");
}