#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/workshop_cdk_ts-stack';

const app = new cdk.App();
new CdkWorkshopStack(app, 'CdkWorkshopStack');
