import { IBitloopsWorkflowDefinition } from '../../entities/workflow/definitions';
import { IWorkflowCache } from '../interfaces';
import Cache from './Cache';

class WorkflowCache extends Cache<IBitloopsWorkflowDefinition> implements IWorkflowCache {
	constructor(max: number) {
		super(max);
	}

	cache(workflowId: string, workflowVersion: string, environmentId: string, workflow: IBitloopsWorkflowDefinition) {
		this.set(`${workflowId}:${workflowVersion}:${environmentId}`, workflow);
	}

	fetch(workflowId: string, workflowVersion: string, environmentId: string): Promise<IBitloopsWorkflowDefinition> {
		const res = this.get(`${workflowId}:${workflowVersion}:${environmentId}`);
		return Promise.resolve(res);
	}

	delete(workflowId: string, workflowVersion: string, environmentId: string) {
		this.remove(`${workflowId}:${workflowVersion}:${environmentId}`);
	}
}

export default WorkflowCache;
