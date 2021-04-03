curl -X POST \
-H "Accept: application/json" \
-H "X-Access-Token: MWFlMzE3NGM5NGUxOThhNjI1NGU5MDk0NzNiZTRhN2JlNGUxNWQyYmMyYjZmZTdjZTI2MDFmMWE0YmRlN2Y2Nw==" \
-H "Cache-Control: no-cache" \
-d '{
    "frames": [
        {
            "text": "$1",
            "index": 0
        }
    ]
}' \
--insecure https://192.168.1.128:4343/api/v1/dev/widget/update/com.lametric.a4b1372fbc776e9409ff666a0ec30503/1
