#!/usr/bin/env bash

# export TERRAFORM_WORKSPACE=jason-local-farm-runner
export TF_STATE_BUCKET="trip-tribe-infra"
export TF_STATE_OBJECT_KEY="jenkins_infra/serverless-jenkins.tfstate"
export TF_LOCK_DB="terraform-lock"
export TF_AWS_REGION="ap-southeast-2"

PRIVATE_SUBNETS='["subnet-0d7b459db163711f4","subnet-08c7cdbffe8d76453"]'
PUBLIC_SUBNETS='["subnet-0c90a05930837a1c6","subnet-0deed5242ff235ce3"]'

export TF_VAR_route53_zone_id="Z09901723RCOAYI64EIAS"
export TF_VAR_route53_domain_name="trip-tribe.com"
export TF_VAR_vpc_id="vpc-03e751757807d863c"
export TF_VAR_efs_subnet_ids=${PRIVATE_SUBNETS}
export TF_VAR_jenkins_controller_subnet_ids=${PRIVATE_SUBNETS}
export TF_VAR_alb_subnet_ids=${PUBLIC_SUBNETS}
