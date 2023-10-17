<script setup>

</script>

<template>
    <div id="wrapper">
        <!-- 서브컨텐츠     //S-->
        <div id="container" class="sub_container">
            <div id="subvisual" class="subvisual">
                <div class="sub_txt">
                    <h2 data-aos="fade-in" data-aos-duration="500">
                        고객센터
                    </h2>
                </div>
            </div>
            <div id="leftmenu">
                <div id="lnb">
                    <ul>
                        <li><a href="" class="on">공지사항</a></li>
                        <li><a href="">상담문의</a></li>
                        <li><a href="">회사소개서 다운로드</a></li>
                        <li><a href="">포토 갤러리</a></li>
                        <li><a href="">영상 갤러리</a></li>
                    </ul>
                </div>
            </div>
            <div id="content">
                <div id="subtitle">
                    <h2>공지사항</h2>
                </div>
                <div>
                    <div class="form_group">
                        <select id="select_Option" title="select" name="sfl">
                            <option value="all">검색</option>
                            <option value="제목">제목</option>
                            <option value="내용">내용</option>
                            <option value="모두">제목 + 내용</option>
                        </select>
                        <div class="placeholder_box">
                            <input type="text" id="placeholder" name="stx" value="" autofocus="autofocus"
                                placeholder="검색">
                            <button type="button" onclick="document.fsearch.submit()" class="btn_primary">검색</button>
                        </div>
                    </div>
                    <table class="board_table">
                        <colgroup>
                            <col width="5%" />
                            <col width="25%" />
                            <col width="10%" />
                            <col width="*" />
                            <col width="5%" />
                            <col width="10%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>부제목</th>
                                <th>내용</th>
                                <th>조회수</th>
                                <th>등록일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>가나다</td>
                                <td>가나다</td>
                                <td>가나다</td>
                                <td>가나다</td>
                                <td>가나다</td>
                                <td>2023-12-12</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="paginate">
                        <ul class="page_btn">
                            <a href="#" class="direction"><img src="img/common/page_Btn_02.jpg" alt="이전페이지"></a>
                            <strong>1</strong> <a href="#" class="direction"><img src="img/common/page_Btn_03.jpg"
                                    alt="다음페이지"></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>