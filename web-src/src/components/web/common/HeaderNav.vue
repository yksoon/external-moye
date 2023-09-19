<template>
    <nav id="nav">
        <ul>
            <li><router-link to="/">모두의예체능 소개</router-link>
                <ul>
                    <li><router-link to="/">인사말</router-link></li>
                    <li><router-link to="/">모두의예체능 소개</router-link></li>
                    <li><router-link to="/">조직 및 구성</router-link></li>
                    <li><router-link to="/">연혁</router-link></li>
                    <li><router-link to="/">CI</router-link></li>
                    <li><router-link to="/">오시는길</router-link></li>
                </ul>
            </li>
            <li><router-link to="/">사업 소개</router-link>     
                <ul>
                    <li><router-link to="/">사업 분야</router-link></li>
                    <li><router-link to="/">플랫폼 서비스</router-link></li>
                    <li><router-link to="/">예체능 시설 Promotion</router-link></li>
                </ul>
            </li>
            <li><router-link to="/">교육서비스</router-link>     
                <ul>
                    <li><router-link to="/">코치진</router-link></li>
                    <li><router-link to="/">Class 130 Category</router-link></li>
                    <li><router-link to="/">성장과정별 교육</router-link></li>
                    <li><router-link to="/">예정교육</router-link></li>
                </ul>
            </li>
            <li><router-link to="/">Partnership</router-link></li>
            <li><router-link to="/">모두의예체능 APP</router-link></li>
            <li><router-link to="/">고객센터</router-link>     
                <ul>
                    <li><router-link to="/notice/notice-list">공지사항</router-link></li>
                    <li><router-link to="/">상담문의</router-link></li>
                    <li><router-link to="/">회사소개서 다운로드</router-link></li>
                    <li><router-link to="/">포토 갤러리</router-link></li>
                    <li><router-link to="/">영상 갤러리</router-link></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'HeaderNav'
}
</script>

<style scoped>
#nav ul, li {
    list-style: none;
}
#nav > ul {
    display: flex;
    text-align: left;
}
#nav a {
    color: #333;
    text-decoration: none;
}
#nav > ul > li > a {
    margin-left: 20px;
    font-weight: bold;
}
</style>