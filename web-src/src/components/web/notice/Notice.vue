<script setup>
import LeftMenu from '@/components/web/common/LeftMenu.vue';
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
            <LeftMenu page="notice"/>
            <div id="content">
                <div id="subtitle">
                    <h2>공지사항</h2>
                </div>
                <div data-aos-duration="1000" data-aos-delay="400">
                    <table class="board_Vtable">
                        <colgroup>
                            <col width="18%">
                            <col width="*">
                            <col width="*">
                        </colgroup>
                        <thead>
                            <tr>
                                <th colspan="3">제목</th>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <ul>
                                        <li>관리자</li>
                                        <li class="imbar">|</li>
                                        <li>조회수</li>
                                        <li class="imbar">|</li>
                                        <li>2023-10-17</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <ul>
                                        <li class="download_li">
                                            <a href="#none" onclick class="attachment_parent">첨부파일
                                                <img src="/img/common/files.jpg">
                                            </a>
                                            <div class="attachment" style="display:none;">
                                                <div class="xbtn"><img src="/img/common/x_btn.png"></div>
                                            </div>
                                        </li>
                                    </ul>
                                    <!-- <script>
                                        $(".attachment_parent").click(function () {
                                            $(".attachment").toggle()
                                            $(".xbtn").click(function () {
                                                $(".attachment").hide()
                                            })
                                        });
                                    </script> -->
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan=3>
                                    <div class="board_content">
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                        <tfoot>
                            <tr>
                                <td>이전글</td>
                                <td colspan="2"><a href="">
                                    </a></td>
                            </tr>
                            <tr>
                                <td>다음글</td>
                                <td colspan="2"><a href="">
                                    </a></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="board_btn_wrap">
                        <div class="boardW_btn">
                            <span class="back_btn">
                            </span>
                            <!-- <span class="left2_btn"><?=$btn_link['delete']?></span>
                            <span class="back_btn"><?=$btn_link['update']?></span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>