import { JOBTYPES } from '@/constants'
import {z} from 'zod'

export const jobFormSchema = z.object(
    {
        roles: z.string({required_error:'Job Title is required'}).min(3,{message:'Job Title must be at least 3 character'}),
        jobType: z.enum(JOBTYPES,{required_error:'You need select a job type'}),
        salaryFrom: z.string({required_error:'Salary from is required'}),
        salaryTo: z.string({required_error:'Salary from is required'}),
        categoryId: z.string({required_error:'You need to select a category'}),
        requiredSkills: z.string().array().nonempty({message:'Required skill must be at least 1 skill'}),
        jobDescription: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
        responsibility: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
        whoYouAre: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
        niceToHave: z.string({required_error:'Job Description is required'}).min(10,{message:'Job Description must be at least 10 character'}),
        benefits: z.object({
            benefit: z.string(),
            description: z.string(),
        }).array().nonempty({message:'Benefit must be at least 1 benefit'})
    }
)