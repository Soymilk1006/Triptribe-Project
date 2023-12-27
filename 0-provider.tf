provider "aws" {
  region = "ap-southeast-2"
}

variable "cluster_name" {
  default = "UATCluster"
}

variable "cluster_version" {
  default = "1.28"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket  = "trip-tribe.com-infra"
    key     = "backend_UAT_infra.tfstate" # Optionally, set a different state file name
    region  = "ap-southeast-2"
    encrypt = true
    #dynamodb_table = "terraform-lock"    # Optionally, use DynamoDB for state locking
  }

}

