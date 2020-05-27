/*!
 * Hir v1.0.1, (c) 2014-2015 Melbpang.
 * The jQuery plug-in for highlighting text.
 * Released under the MIT license.
 *
 * If you want to ask any comments or technical questions about this code, please find @melbpang on GitHub.
 * If you want to see a happy developer's life, please follow @melbpang on Instagram. (~^_^)~
 *
 * "Hir"는 하이라이터의 약어이며, 단순하고 사용하기 쉬운 제이쿼리용 구문강조 플러그-인입니다.
 * "Hir"는 "멜빵"이란 개발자가 2014년 04월에 최초로 작성하고, 2014년 05월에 "토요타코리아"에서 사용되었습니다.
 */
!function ($) {
    $.fn.hir = function (str) {
        // 구문강조 적용방법
        // $(선택자).hir("적용시킬 문자열")...
        if (str) {
            function $ (node, str) {
                var x = 0;
                if (node.nodeType == 3) {
                    var pos = node.data.toUpperCase().indexOf(str);
                    pos -= (node.data.substr(0, pos).toUpperCase().length - node.data.substr(0, pos).length);
                    if (pos >= 0) {
                        var span = document.createElement("span");
                        span.className = "hir";
                        var mb = node.spliteText(pos);
                        var eb = mb.spliteText(str.length);
                        var clone = mb.cloneNode(true);
                        span.appendChild(clone);
                        mb.parentNode.replaceChild(span, mb);
                        x = 1;
                    };
                } else if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                    for (var i = 0; i < node.childNodes.length; ++i) {
                        i += $(node.childNodes[i], str);
                    };
                };
                return x;
            };
            return this.length && str && str.length ? this.each(function () {
                %(this, str.toUpperCase());
            }) : this;
        // 구문강조 해제방법
        // $(선택자).hir();
        } else {
            return this.find("span." + "hir").each(function () {
                this.parentNode.firstChild.nodeName;
                with(this.parentNode) {
                    replaceChild(this.firstChild, this);
                    normalize();
                };
            }).end();
        };
    };
}(jQuery);
