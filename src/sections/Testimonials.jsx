import { clientReviews } from "../constants";

const Testimonials = () => {
	return (
		<section aria-label='Client Testimony' className='c-space my-20'>
			<h2 className='head-text'>Hear from My Clients</h2>
			<div className='client-container'>
				{clientReviews.map(({ id, name, review, position, img }) => (
					<div key={id} className='client-review'>
						<div className=''>
							<p className='font-light text-white'>{review}</p>
							<div className='client-content'>
								<div className='flex gap-3'>
									<img src={img} alt={name} className='size-12 rounded-full' />
									<div className='flex flex-col'>
										<p className='font-semibold text-white-800'>{name}</p>
										<p className='text-sm text-white-500 md:text-base'>
											{position}
										</p>
									</div>
								</div>
								<div className='flex items-center gap-2 self-end'>
									{Array.from({ length: 5 }).map((_, index) => (
										<img
											key={index}
											src='/assets/star.png'
											className='size-5'
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
