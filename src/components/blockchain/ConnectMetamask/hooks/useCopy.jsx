import { useState } from 'react';

export const useCopyToClipboard = () => {
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  const copy = text => {
    if (window.clipboardData && window.clipboardData.setData) {
      // IE specific code path to prevent textarea being shown while dialog is visible.
      window.clipboardData.setData('Text', text);
      setIsCopySuccess(true);
      setTimeout(function () {
        setIsCopySuccess(false);
      }, 2500);
      return;
    } else if (
      document.queryCommandSupported &&
      document.queryCommandSupported('copy')
    ) {
      const textarea = document.createElement('textarea');
      textarea.textContent = text;
      textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page in MS Edge.
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy'); // Security exception may be thrown by some browsers.
        setIsCopySuccess(true);
        setTimeout(function () {
          setIsCopySuccess(false);
        }, 2500);
        return;
      } catch (ex) {
        console.warn('Copy to clipboard failed.', ex);
        return false;
      } finally {
        document.body.removeChild(textarea);
      }
    }
  };

  return [isCopySuccess, copy];
};

export default useCopyToClipboard;
