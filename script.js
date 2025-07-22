let data = [];

fetch('results.json')
  .then(response => response.json())
  .then(json => data = json)
  .catch(err => console.error("فشل تحميل النتائج:", err));

function searchResult() {
  const input = document.getElementById('searchInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (!input) {
    resultDiv.innerHTML = "<p style='color:red;'>من فضلك أدخل رقم الجلوس</p>";
    return;
  }

  const student = data.find(item => item.seating_no.toString() === input);

  if (student) {
    resultDiv.innerHTML = `
      <p><strong>الاسم:</strong> ${student.arabic_name}</p>
      <p><strong>المجموع الكلي:</strong> ${student.total_degree}</p>
    `;
  } else {
    resultDiv.innerHTML = "<p style='color:red;'>لم يتم العثور على الطالب</p>";
  }
}
