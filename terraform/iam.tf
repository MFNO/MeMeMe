# Retrieve gitlab-user as a resource
data "aws_iam_user" "user" {
  user_name = "GitHubAdmin"
}

# Create the policy to access the S3 bucket
resource "aws_iam_policy" "ci_policy" {
  name        = "github-ci-policy"
  path        = "/"
  description = "Github CI policy"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = [
          "s3:PutObject",
          "s3:PutObjectAcl"
        ],
        Effect = "Allow",
        Resource = [
          "${aws_s3_bucket.static_react_bucket.arn}/*"
        ]
      },
      {
        Action = [
          "s3:ListBucket"
        ],
        Effect = "Allow",
        Resource = [
          aws_s3_bucket.static_react_bucket.arn
        ]
      },
    ]
  })
}

# Attach the policy to our user
resource "aws_iam_policy_attachment" "gitlab_ci_attachment" {
  name       = "gitlab-ci-attachment"
  users      = [data.aws_iam_user.user.user_name]
  policy_arn = aws_iam_policy.ci_policy.arn
}