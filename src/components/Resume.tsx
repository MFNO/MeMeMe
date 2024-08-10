import { AiOutlineCloudDownload } from 'react-icons/ai';
import { pdfjs, Document, Page } from 'react-pdf';
import LI from '../LI.png';
import GH from '../GH.png';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

export default function Resume() {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.download =
      'https://resume-manu.s3.amazonaws.com/manu-fourneau-resume.pdf';

    link.href = 'https://resume-manu.s3.amazonaws.com/manu-fourneau-resume.pdf';

    link.click();
  };
  return (
    <>
      <div className="grid row">
        <div className="grid column">
          <h1>Socials</h1>
          <div className="grid row">
            <a href="https://www.linkedin.com/in/manufourneau/">
              <img height={85} width={85} src={LI}></img>
            </a>
            <a href="https://github.com/MFNO/">
              <img height={85} width={85} src={GH}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="grid row">
        <div className="grid column">
          <h1>Projects</h1>
          <a href="https://dhipbrbcoutdm.cloudfront.net">Chore Mate</a>
          <a href="https://cruxroute.com/">Crux Route</a>
        </div>
      </div>
      <div className="grid row">
        <div className="grid column">
          <h1 style={{ height: '50px', lineHeight: '50px' }}>Resume</h1>
          <AiOutlineCloudDownload
            style={{ cursor: 'pointer', marginLeft: 'auto' }}
            size={40}
            color={'grey'}
            onClick={downloadPdf}
          />
          <Document
            file={
              'https://resume-manu.s3.amazonaws.com/manu-fourneau-resume.pdf'
            }
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </>
  );
}
