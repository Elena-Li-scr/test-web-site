import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer-logo" alt="Group" src="/assets/image/logo.png" />

      <div className="footer-wrapper">
        <nav className="footer-navbar">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">회사소개</li>
            <li className="footer-nav-item">개인정보 처리방침</li>
            <li className="footer-nav-item">이용약관</li>
            <li className="footer-nav-item">고객센터</li>
          </ul>
        </nav>

        <p className="footer-text">
          법인명(상호) : 주식회사 에그팜 | 대표자 : 고종현 <br />주소 : 05597 서울
          송파구 삼학사로1길 54 1층 <br />전화 : 1588-4654 | 개인정보관리책임자 :
          이미선<br />(eggfarmaccount@naver.com)<br />사업자등록번호
          3778603522 | 통신판매업신고 신고준비중
          <br />
          Copyright © Egg Farm. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
