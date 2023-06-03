window.onload = function() {
    var elements = document.querySelectorAll('.bo_cau_hoi');
    const randomIndex = Math.floor(Math.random() * elements.length);
   
    //tạo danh sách chứa toàn bộ phần tử có class="question"
    const questions = document.querySelectorAll('.question');
    const userAnswers ={};

    //lặp qua các phần tử trong questions
    questions.forEach(function(question) 
    {
        // lấy tất cả các câu hỏi trong question
        const answers = question.querySelectorAll('input[type="radio"]');
        //lấy nội dung của thẻ h3 chuyển thành mảng rồi lấy phần tử thứ 2 của mảng
        const questionNumber = question.querySelector('h3').textContent.split(' ')[1];
        
        var kt= true;
        // lặp qua các câu trả lời trong câu hỏi
        answers.forEach( function(answer) 
        {
            answer.addEventListener('click', function() 
            {
            //kiểm tra xem câu trả lời có class = "correct" không
            let correct = answer.classList.contains('correct');
                userAnswers[questionNumber] = 
                {
                    user_quesion: questionNumber,
                    user_value: correct
                }
            });
        });
    });

    //Đẩy dữ liệu sang file html thứ 2
    const tinh_diem = document.getElementById('nopbai');
        tinh_diem.addEventListener('click', function() {
        localStorage.setItem('randomIndex', randomIndex);
        localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
    });

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