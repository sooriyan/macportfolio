import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const numPages = 2;

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a href='files/resume.pdf' download className='cursor-pointer' title='Download Resume'>
                    <Download className='icon' />
                </a>
            </div>
            <Document file="files/resume.pdf">
                <Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer />
            </Document>
            <div className="flex items-center gap-2 justify-center">
                <button onClick={() => setPageNumber(prev => prev - 1)} disabled={pageNumber === 1} className="icon-hover">
                    <ChevronLeft size={20} />
                </button>
                <span>{pageNumber} of {numPages}</span>
                <button onClick={() => setPageNumber(prev => prev + 1)} disabled={pageNumber === numPages} className="icon-hover">
                    <ChevronRight size={20} />
                </button>
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume");


export default ResumeWindow