export default function Footer() {
    return (
        <div className="frame">
            <img
                className="group"
                alt="Group"
                src="/assets/image/logo.png"
            />

            <div className="frame-wrapper">
                <div className="div">
                    <div className="navbar">
                        <div className="text-wrapper">회사소개</div>
                        <div className="text-wrapper">개인정보 처리방침</div>
                        <div className="text-wrapper">이용약관</div>
                        <div className="text-wrapper">고객센터</div>
                    </div>

                    <p className="element">
                        <span className="span">
                            법인명(상호) : 주식회사 에그팜 | 대표자 : 고종현<br />
                            주소 : 05597 서울 송파구 삼학사로1길 54 1층<br />
                            전화 : 1588-4654 | 개인정보관리책임자 : 이미선
                            (eggfarmaccount@naver.com)<br />
                            사업자등록번호 : 377-86-03522 | 통신판매업신고 : 신고준비중
                            <br />
                            <br />
                            Copyright © Egg Farm. All rights reserved.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
