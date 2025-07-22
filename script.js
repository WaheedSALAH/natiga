let data = [];

fetch('results.json')
  .then(response => response.json())
  .then(json => data = json)
  .catch(err => console.error("فشل تحميل النتائج:", err));

function searchResult() {
  const input = document.getElementById('searchInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (!input) {
    resultDiv.innerHTML = "<p style='color:red;'>من فضلك أدخل رقم الجلوس أو الاسم</p>";
    return;
  }

  // البحث برقم الجلوس أو الاسم
  const student = data.find(item =>
    item.seating_no.toString() === input || 
    item.arabic_name.trim().includes(input)
  );

  if (student) {
    resultDiv.innerHTML = `
      <p><strong>رقم الجلوس:</strong> ${student.seating_no}</p>
      <p><strong>الاسم:</strong> ${student.arabic_name}</p>
      <p><strong>المجموع الكلي:</strong> ${student.total_degree}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>لم يتم العثور على الطالب</p>";
  }
}
