//tạo danh sách chứa toàn bộ phần tử có class="question"
const questions = document.querySelectorAll('.question');

//lặp qua các phần tử trong questions
questions.forEach(function(question)  
{
    // lấy tất cả các câu hỏi trong question
    const answers = question.querySelectorAll('input[type="radio"]');
    
    // lặp qua các câu trả lời trong câu hỏi
    answers.forEach( function(answer) 
    {
        answer.addEventListener('click', function() 
        {
            //kiểm tra xem câu trả lời có class = "correct" không
            let correct = answer.classList.contains('correct');
            if (correct) 
            {
                answer.parentElement.style.backgroundColor = 'lightgreen';
            }
        });
    });
});

//refesh trở về đầu trang.
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}