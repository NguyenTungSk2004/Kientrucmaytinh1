window.onload = function() {

    //Lấy dữ liệu từ file main.js và khai báo biến
    const user = JSON.parse(localStorage.getItem('userAnswers'));
    const questions = document.querySelectorAll('.question');
    const randomIndex = parseInt(localStorage.getItem('randomIndex'));
    var caudung = 0;
    var causai = 0;
    var elements = document.querySelectorAll('.bo_cau_hoi');

    questions.forEach(function(question) 
    {
        //thêm dấu thích vào phần đúng
        const answers = question.querySelectorAll('input[type="radio"]');
        answers.forEach( function(answer) {
            let correct = answer.classList.contains('correct');
            if (correct) {
                answer.parentElement.innerHTML += '<img src="https://raw.githubusercontent.com/NguyenTungSk2004/Kientrucmaytinh1/master/thithu/tich.svg" alt="Correct" class="questioncorrectnessicon" />'
            }
        });
		
        //Tự click câu đúng vào khóa click câu trả lời
        const index = question.querySelector('h3').textContent.split(' ')[1];
        const correctElement = question.querySelector('.correct');
        correctElement.click();
        question.querySelectorAll('input[type="radio"]').forEach(function(radio) {
            radio.setAttribute('disabled', 'disabled');
        });
        
        //đổi màu đúng - sai - chưa làm
        question.style.backgroundColor = 'rgb(106 212 255)';
        for(const key in user) 
        {
            const value = user[key];
            if (value.user_question == index) 
            {
                if(value.user_value == true)
                {
                    question.style.backgroundColor = 'lightgreen';
                    caudung++;
                }else{
                    question.style.backgroundColor = '#ff6a6a';
                    causai++;
                }
            }
        }
    });

    //Hiển thị thông tin tiêu đề
    document.querySelector(".diem").innerHTML = `Điểm của bạn là: ${caudung/elements.length*10/40} `;
    document.querySelector(".socaudung").textContent = `Số câu trả lời đúng: ${caudung/elements.length}`;
    document.querySelector(".socausai").textContent = `Số câu trả lời sai: ${causai/elements.length}`;
    document.querySelector(".chuatraloi").textContent = `Số câu chưa làm: ${40-caudung/elements.length-causai/elements.length}`;
    caudung =0;
    causai=0;

    //Loại bỏ các bộ câu hỏi khác
    if (randomIndex == 0){
        elements[1].style.display = 'none';
        elements[2].style.display = 'none';
    }
    if (randomIndex == 1){
        elements[0].style.display = 'none';
        elements[2].style.display = 'none';
    }
    if (randomIndex == 2){
        elements[1].style.display = 'none';
        elements[0].style.display = 'none';
    }
}