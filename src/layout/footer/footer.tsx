import { FOOTER_TEXT } from '../../common/constants/contants';
import { scrollToTop } from '../../common/utils';
import './footer.scss';

export function Footer() {
  const onBackToTop = () => {
    scrollToTop();
  };

  return (
    <div className="page-footer d-flex justify-content-around align-items-end">
      <div className="footer-content d-flex justify-content-between">
        <div className="left-pane d-flex align-items-center">
          <div className="brand-title">{FOOTER_TEXT.BRAND}</div>
          <div className="copyright">{FOOTER_TEXT.COPYRIGHT_TEXT}</div>
        </div>
        <div>
          <button onClick={onBackToTop}>
            {FOOTER_TEXT.BACK_TO_TOP_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  );
}
