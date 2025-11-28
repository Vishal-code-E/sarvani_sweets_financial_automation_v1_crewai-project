import os
import json

from crewai import LLM
from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import (
    FileReadTool
)
from crewai.utilities.converter import Converter as SchemaConverter





@CrewBase
class SarvaniSweetsFinancialAutomationCrew:
    """SarvaniSweetsFinancialAutomation crew"""

    
    @agent
    def main_financial_controller(self) -> Agent:
        
        return Agent(
            config=self.agents_config["main_financial_controller"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            max_execution_time=None,
            llm=LLM(
                model="gemini/gemini-1.5-flash",
                temperature=0.7,
            ),
            
        )
    
    @agent
    def branch_operations_manager(self) -> Agent:
        
        return Agent(
            config=self.agents_config["branch_operations_manager"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            max_execution_time=None,
            llm=LLM(
                model="gemini/gemini-1.5-flash",
                temperature=0.7,
            ),
            
        )
    
    @agent
    def gst_compliance_specialist(self) -> Agent:
        
        return Agent(
            config=self.agents_config["gst_compliance_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            max_execution_time=None,
            llm=LLM(
                model="gemini/gemini-1.5-flash",
                temperature=0.7,
            ),
            
        )
    
    @agent
    def tds_and_payroll_compliance_officer(self) -> Agent:
        
        return Agent(
            config=self.agents_config["tds_and_payroll_compliance_officer"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            max_execution_time=None,
            llm=LLM(
                model="gemini/gemini-1.5-flash",
                temperature=0.7,
            ),
            
        )
    
    @agent
    def financial_reconciliation_and_audit_specialist(self) -> Agent:
        
        return Agent(
            config=self.agents_config["financial_reconciliation_and_audit_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            max_execution_time=None,
            llm=LLM(
                model="gemini/gemini-1.5-flash",
                temperature=0.7,
            ),
            
        )
    
    @agent
    def financial_reporting_and_ca_documentation_specialist(self) -> Agent:
        
        return Agent(
            config=self.agents_config["financial_reporting_and_ca_documentation_specialist"],
            
            
            tools=[				FileReadTool()],
            reasoning=False,
            max_reasoning_attempts=None,
            inject_date=True,
            allow_delegation=False,
            max_iter=25,
            max_rpm=None,
            
            max_execution_time=None,
            llm=LLM(
                model="gemini/gemini-1.5-flash",
                temperature=0.7,
            ),
            
        )
    

    
    @task
    def hourly_branch_data_sync(self) -> Task:
        return Task(
            config=self.tasks_config["hourly_branch_data_sync"],
            markdown=False,
            
            
        )
    
    @task
    def daily_branch_financial_summary(self) -> Task:
        return Task(
            config=self.tasks_config["daily_branch_financial_summary"],
            markdown=False,
            
            
        )
    
    @task
    def gst_liability_calculation(self) -> Task:
        return Task(
            config=self.tasks_config["gst_liability_calculation"],
            markdown=False,
            
            
        )
    
    @task
    def tds_computation_and_tracking(self) -> Task:
        return Task(
            config=self.tasks_config["tds_computation_and_tracking"],
            markdown=False,
            
            
        )
    
    @task
    def multi_branch_reconciliation_audit(self) -> Task:
        return Task(
            config=self.tasks_config["multi_branch_reconciliation_audit"],
            markdown=False,
            
            
        )
    
    @task
    def consolidated_financial_controller_review(self) -> Task:
        return Task(
            config=self.tasks_config["consolidated_financial_controller_review"],
            markdown=False,
            
            
        )
    
    @task
    def ca_grade_financial_report_generation(self) -> Task:
        return Task(
            config=self.tasks_config["ca_grade_financial_report_generation"],
            markdown=False,
            
            
        )
    

    @crew
    def crew(self) -> Crew:
        """Creates the SarvaniSweetsFinancialAutomation crew"""
        return Crew(
            agents=self.agents,  # Automatically created by the @agent decorator
            tasks=self.tasks,  # Automatically created by the @task decorator
            process=Process.sequential,
            verbose=True,
        )

    def _load_response_format(self, name):
        with open(os.path.join(self.base_directory, "config", f"{name}.json")) as f:
            json_schema = json.loads(f.read())

        return SchemaConverter.build(json_schema)
