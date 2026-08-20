export async function onRequestPost(context) {

    const {
        request,
        env
    } = context;


    try {

        const body = await request.json();


        const password = body.password;


        if(!password){

            return Response.json({
                success:false,
                message:"请输入密码"
            },{
                status:400
            });

        }



        if(password !== env.SITE_ACCESS_PASSWORD){

            return Response.json({
                success:false,
                message:"密码错误"
            },{
                status:401
            });

        }



        return Response.json(
            {
                success:true,
                message:"验证成功"
            },
            {
                headers:{
                    "Set-Cookie":
                    [
                        "cloudnav_auth=true",
                        "Path=/",
                        "HttpOnly",
                        "Secure",
                        "SameSite=Strict",
                        "Max-Age=604800"
                    ].join("; ")
                }
            }
        );



    }catch(e){


        return Response.json({

            success:false,
            message:"服务器错误"

        },{
            status:500
        });


    }

}