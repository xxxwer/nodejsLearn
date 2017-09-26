/**
 * Module dependencies.
 */
'use strict'

module.exports = auth

function auth (opts) {
    opts = opts || {};
    const onerror = opts.onerror;
    opts.onerror = undefined;

    return async function authUser(ctx, next) {
        try {
            if (!(ctx.session && ctx.session.isLogin && ctx.session.userName)) {
                ctx.redirect('/error')
            }
        } catch (err) {
            if (onerror) {
                onerror(err, ctx);
            } else {
                throw err;
            }
        }
        await next();
    };
}

