export * from './branch.service';
import { BranchService } from './branch.service';
export * from './requirement.service';
import { RequirementService } from './requirement.service';
export const APIS = [BranchService, RequirementService];
