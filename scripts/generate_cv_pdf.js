import fs from 'fs';
import path from 'path';

// Ensure public directory exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Function to build a clean standard PDF 1.4 file
function createPdfBuffer() {
  const contentLines = [
    'BT',
    '/F1 22 Tf',
    '40 750 Td',
    '(KHALIL UR REHMAN  |  KHALIL MIRZA) Tj',
    '0 -24 Td',
    '/F1 12 Tf',
    '(Data Entry Specialist  |  Computer Science Student  |  Aspiring IT Professional) Tj',
    '0 -18 Td',
    '/F2 10 Tf',
    '(Rawalpindi, Punjab, Pakistan  |  +92 335 5817727  |  khalilmirza733@gmail.com) Tj',
    '0 -14 Td',
    '(LinkedIn: https://www.linkedin.com/in/khalil-mirza-8316043a8/) Tj',
    '0 -28 Td',
    '/F1 14 Tf',
    '(PROFESSIONAL SUMMARY) Tj',
    '0 -16 Td',
    '/F2 10 Tf',
    '(I am Khalil ur Rehman, also known professionally as Khalil Mirza, an Intermediate student at Allama Iqbal) Tj',
    '0 -14 Td',
    '(Open University and a Data Entry Specialist at 7star Digital Marketing Agency. A hardworking, responsible,) Tj',
    '0 -14 Td',
    '(and motivated individual passionate about developing technical skills, gaining professional experience, and) Tj',
    '0 -14 Td',
    '(growing in the IT field with a focus on data accuracy and continuous learning.) Tj',
    '0 -26 Td',
    '/F1 14 Tf',
    '(WORK EXPERIENCE) Tj',
    '0 -18 Td',
    '/F1 11 Tf',
    '(Data Entry Specialist - 7star Digital Marketing Agency) Tj',
    '0 -14 Td',
    '/F2 10 Tf',
    '(February 2023 - Present  |  Islamabad, Pakistan) Tj',
    '0 -14 Td',
    '(- Responsible for professional online data entry and verification operations.) Tj',
    '0 -13 Td',
    '(- Ensuring high accuracy, data integrity, and systematic record management.) Tj',
    '0 -13 Td',
    '(- Continuous professional skill development and workflow optimization.) Tj',
    '0 -26 Td',
    '/F1 14 Tf',
    '(EDUCATION) Tj',
    '0 -18 Td',
    '/F1 11 Tf',
    '(Intermediate  |  Allama Iqbal Open University (AIOU)) Tj',
    '0 -14 Td',
    '/F2 10 Tf',
    '(Currently Enrolled) Tj',
    '0 -16 Td',
    '/F1 11 Tf',
    '(Matric in Computer Science  |  Asif Public School System) Tj',
    '0 -14 Td',
    '/F2 10 Tf',
    '(Rawalpindi Board) Tj',
    '0 -26 Td',
    '/F1 14 Tf',
    '(TECHNICAL SKILLS) Tj',
    '0 -16 Td',
    '/F2 10 Tf',
    '(- Computer Operations: Fluent) Tj',
    '0 -14 Td',
    '(- Microsoft Office: Intermediate) Tj',
    '0 -14 Td',
    '(- C++ Programming: Intermediate) Tj',
    '0 -14 Td',
    '(- Python Programming: Intermediate) Tj',
    '0 -14 Td',
    '(- Online Data Entry, Computer Science) Tj',
    '0 -26 Td',
    '/F1 14 Tf',
    '(LANGUAGES & INTERESTS) Tj',
    '0 -16 Td',
    '/F2 10 Tf',
    '(Languages: Urdu (Fluent), English (Intermediate), Punjabi (Intermediate)) Tj',
    '0 -14 Td',
    '(Interests: Driving, Gaming, Travelling, Swimming) Tj',
    'ET'
  ];

  const streamContent = contentLines.join('\n');
  const streamLength = Buffer.byteLength(streamContent, 'utf-8');

  const objects = [];

  // Obj 1: Catalog
  objects.push('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');

  // Obj 2: Pages
  objects.push('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n');

  // Obj 3: Page
  objects.push(
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n'
  );

  // Obj 4: Contents
  objects.push(
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj\n`
  );

  // Obj 5: Font F1 (Helvetica-Bold)
  objects.push(
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n'
  );

  // Obj 6: Font F2 (Helvetica)
  objects.push(
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'
  );

  let header = '%PDF-1.4\n';
  let body = '';
  let offsets = [];

  let currentOffset = Buffer.byteLength(header, 'utf-8');

  for (let i = 0; i < objects.length; i++) {
    offsets.push(currentOffset);
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf-8');
  }

  const xrefOffset = currentOffset;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let offset of offsets) {
    xref += String(offset).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(header + body + xref + trailer, 'utf-8');
}

const pdfBuffer = createPdfBuffer();
fs.writeFileSync(path.join(publicDir, 'Khalil_Mirza_CV.pdf'), pdfBuffer);
console.log('Successfully generated public/Khalil_Mirza_CV.pdf');
