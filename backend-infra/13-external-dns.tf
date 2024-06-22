data "aws_iam_policy_document" "aws_external_dns_assume_role_policy" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]
    effect  = "Allow"

    condition {
      test     = "StringEquals"
      variable = "${replace(aws_iam_openid_connect_provider.eks.url, "https://", "")}:sub"
      values   = ["system:serviceaccount:staging:external-dns"]
    }

    condition {
      test     = "StringEquals"
      variable = "${replace(aws_iam_openid_connect_provider.eks.url, "https://", "")}:aud"
      values   = ["sts.amazonaws.com"]
    }

    principals {
      identifiers = [aws_iam_openid_connect_provider.eks.arn]
      type        = "Federated"
    }
  }
}


resource "aws_iam_role" "aws_external_dns" {
  assume_role_policy = data.aws_iam_policy_document.aws_external_dns_assume_role_policy.json
  name               = "aws-external-dns"
}

resource "aws_iam_policy" "aws_external_dns" {
  policy = file("./AllowExternalDNS.json")
  name   = "AWSExternalDNS"
}

resource "aws_iam_role_policy_attachment" "aws_external_dns_attach" {
  role       = aws_iam_role.aws_external_dns.name
  policy_arn = aws_iam_policy.aws_external_dns.arn
}

output "aws_external_dns_role_arn" {
  value = aws_iam_role.aws_external_dns.arn
}
