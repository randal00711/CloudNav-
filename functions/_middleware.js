export async function onRequest(context){


    const {
        request,
        next
    } = context;


    const url =
    new URL(request.url);



    /*
       放行登录页面
    */

    if(
        url.pathname === "/login.html"
    ){

        return next();

    }



    /*
       放行认证接口
    */

    if(
        url.pathname.startsWith("/api/auth")
    ){

        return next();

    }



    /*
       检查Cookie
    */

    const cookie =
    request.headers.get("Cookie") || "";



    if(
        cookie.includes(
            "cloudnav_auth=true"
        )
    ){

        return next();

    }



    /*
       未登录跳转
    */

    return Response.redirect(
        new URL(
            "/login.html",
            request.url
        ),
        302
    );

}