// Data komentar
const comments = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// Fungsi menghitung total komentar dan balasannya
function countTotalComments(comments) {
  let totalComments = 0;

  function countCommentsRecursive(comment) {
    totalComments++;

    if (comment.replies) {
      comment.replies.forEach((reply) => {
        countCommentsRecursive(reply);
      });
    }
  }

  comments.forEach((comment) => {
    countCommentsRecursive(comment); 
  });

  return totalComments;
}

// Menampilkan hasil
const totalComments = countTotalComments(comments);
console.log("Total komentar beserta balasannya:", totalComments, "komentar");
