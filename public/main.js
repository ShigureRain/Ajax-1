getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)  //把json字符串变成对象
            myName.textContent = object.name
        }
    };
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};


getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {  //如果下载完成
            if (request.status >= 200 && request.status < 300) {  //如果状态号在200-300
                const div = document.createElement("div");  // 创建 div 标签
                div.innerHTML = request.response;  // 填写 div 内容
                document.body.appendChild(div);  // 插入到身体里
            }
        }
    };
    request.send();
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {
        if (request.readyState === 4) {  //如果下载完成
            if (request.status >= 200 && request.status < 300) {  //如果状态号在200-300
                const script = document.createElement("script");  // 创建 script 标签
                script.innerHTML = request.response;  // 填写 script 内容
                document.body.appendChild(script);  // 插到身体里
            }
        }
    };
    request.send();
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest();  //创建HttpRequest对象
    request.open("GET", "/style.css");  //调用对象的open方法 // readyState = 1
    request.onreadystatechange = () => {
        console.log(request.readyState);  // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
        if (request.readyState === 4) {  //如果下载完成
            if (request.status >= 200 && request.status < 300) {  //如果状态号在200-300
                const style = document.createElement("style");  // 创建 style 标签
                style.innerHTML = request.response;  // 填写 style 内容
                document.head.appendChild(style);  // 插到头里面
            }
        }
    };
    request.send();  // readyState = 2
};