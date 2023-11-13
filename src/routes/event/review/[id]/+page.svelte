<script lang="ts">
    import { getCookie } from 'typescript-cookie';
	import type { PageData } from './$types';
    import { goto } from '$app/navigation';
	export let data: PageData;
	let review = ''
	let score = 1;

	const addReview = async() =>{
		const response = await fetch('http://localhost:8080/review', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ` + getCookie('accessToken'),
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ eventId: data.props.eventId, review,score})
		});

		if (!response.ok) {
			alert('오류가 발생했습니다.');
		}
	}

	const deleteReview = async(reviewId:any) => {
		const response = await fetch('http://localhost:8080/review', {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ` + getCookie('accessToken'),
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ reviewId })
		});

		if (!response.ok) {
			alert('오류가 발생했습니다.');
		}
	}
</script>

<form on:submit|preventDefault={addReview} style="display: inline;">
	<label>
		리뷰
		<input name="name" bind:value={review} />
	</label>
	<label>
		<input type="number" name="maxParticipation" bind:value={score} min="1" max="5"/>
	</label> <br />
	<button type="submit">확인</button>
</form>
<br><br>
{#each data.props.data as review}
작성자 : {review.user.nickName} <br>리뷰 : {review.review} 점수 : {review.score} <br><form on:submit|preventDefault={() => {deleteReview(review.id)}} style="display: inline;">
	<button type="submit">삭제</button>
</form>
<br><br>
{/each}


