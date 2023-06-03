window.onload = function() {
    const user = JSON.parse(localStorage.getItem('userAnswers'));
    const questions = document.querySelectorAll('.question');
    var caudung = 0;
    var causai = 0;
    
    questions.forEach(function(question) 
    {
        //thêm dấu thích vào phần đúng
        const answers = question.querySelectorAll('input[type="radio"]');
        answers.forEach( function(answer) {
            let correct = answer.classList.contains('correct');
            if (correct) {
                answer.parentElement.innerHTML += '<img src="https://hoctructuyen.vimaru.edu.vn/theme/image.php/academi/core/1584416815/i/grade_correct" alt="Correct" class="questioncorrectnessicon" />'
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
            if (value.user_quesion == index) 
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

    document.querySelector(".diem").innerHTML = `Điểm của bạn là: ${caudung*10/40} `;
    document.querySelector(".socaudung").textContent = `Số câu trả lời đúng: ${caudung}`;
    document.querySelector(".socausai").textContent = `Số câu trả lời sai: ${causai}`;
    document.querySelector(".chuatraloi").textContent = `Số câu chưa làm: ${40-caudung-causai}`;

}