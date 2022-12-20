<script>
	import {locale} from "svelte-i18n";
	import Head from "../../lib/Head.svelte";
</script>
{#if $locale === 'hk'}
	<div class="py-6 mb-4 container">
		<h1 class="text-4xl">守則與指南</h1>
		<p class="mt-1 text-2xl">一對一/自組課堂</p>
		<h3>一對一zoom課堂請假安排</h3>
		<p>學生請假需要提早至少25小時通知。如果課堂當天病假，需要提供醫生紙。我們會和家長以及老師在一起商討及確定補課時間。當天請假不能獲得補課，因為老師時間已經預留出來，已經不可能讓給其他學生，這樣非常浪費資源。敬請理解，謝謝。😊</p>
		<p>備註：</p>
		<ul>
			<li>1. 每一期(16堂以內)報名，學生病假(需提供醫生證明)加事假補課次數上限：3次</li>
			<li>2. 如果沒有病假，則事假補課次數上限為2次</li>
		</ul>
		<h3>自組2人或以上zoom課堂請假安排</h3>
		<p>自組2個或以上學生課堂，個別學生如果請假(包括病假和事假)，將不獲補課。如果其他學生同意一起請假，則請假的時間，手續以及是否可以補課，與一對一課堂的請假規則相同。</p>
		<h3>遲到或缺席課堂</h3>
		<p>學生如遲到或缺席課堂，將不獲補鐘或補堂。</p>
		<h3>報名及續課安排</h3>
		<p>正式課堂報名安排：每次報名10堂起，10堂課堂中我們會固定同一位老師，除非一些不可控情況出現，例如老師離職，或者患病。如出現以上情況，我們會安排其他老師代替，但學費不設退款。</p>
		<p>續課安排：每次續課等於重新報名，雖然原則上EHLA會盡量安排同一位老師給學生，但如學生未續課（未完成付款及通知），EHLA沒有義務為學生預留同一位老師。故，如果家長想預留同一位老師時間，請自行決定是否提前續課以及可以一次性報多一些正式課程續課。如果老師情況允許，我們都會盡量固定同一位老師。</p>
		<h3>設備或網絡問題導致無法上課？</h3>
		<p>如果因為老師設備或網絡問題導致學生無法按時上課，我們會安排補課或者補鐘。如學生因為自身設備或網絡問題，導致未能登入zoom或沒有收音或收畫面功能，原則上不會獲得補課或者補鐘。因為老師時間已經預留出來，我們已經需要支付老師薪酬。</p>
	</div>
{:else}
	<div class="py-6 mb-4 container">
		<h1 class="text-4xl">GUIDE & RULES</h1>
		<p class="mt-1 text-2xl">(1-ON-1/SELF-TEAM-UP CLASSES)</p>
		<h3>Taking Leave Policy for One-on-One Class </h3>
		<p>Students requesting for leave need to give us at least 25 hours IN-ADVANCE notice.  If it's a sick leave on the day of class, you need to obtain a doctor's certificate for leave recommendation.  We will work with parents and teachers to rearrange a make-up lesson.  If you ask for leave on the day of lesson, no make-up lesson will be arranged because the teacher’s time has already been reserved and it is impossible to give it to other students. This is a waste of resources and teacher's time. </p>
		<p>Remark:</p>
		<ul>
			<li>1. The maximum no. of sick leave (doctor's certificate required) plus personal leave make-up lessons: 3</li>
			<li>2. If there is no sick leave, the upper limit of the no. of make-up lessons for personal leave is 2 </li>
		</ul>
		<h3>Taking Leave Policy for Self-Team-Up Class</h3>
		<p>Self-team-up classes of 2 or more students, if individual students ask for leave (including sick leave and personal leave), they will not be given make-up lessons.  If other students agree to ask for leave together, the leave application time, procedures and whether they can make up classes are the same as the leave rules for one-on-one classes. </p>
		<h3>Late for Class or Absent</h3>
		<p>No extra lesson time will be added if the student is late for class. And no make-up lesson will be arranged for absence. </p>
		<h3>Enrolment and Renewal </h3>
		<p>To enrol in or renew the class, a minimum of 10 lessons as a package is required (at least one lesson a week). We will try the best to fix a same teacher for the student, except for cases beyond our control, such as the teacher's resignation or illness. If it happens, we will arrange another teacher to continue the teaching, and no tuition fee will be refunded. </p>
		<p>For each renewal, although in principle EHLA will try the best to arrange the same teacher for the student, if the student does not complete the renewal procedure in time, e.g. delay the payment and notification, etc, EHLA is not obliged to reserve the same teacher for the student. Therefore, if parents want to reserve the same teacher, they need to decide whether to renew classes in advance or apply for more formal lessons in one go. If things can be managed reasonably, we will try to assign the same teacher to the student. </p>
		<h3>Equipments/Network Issues</h3>
		<p>If students are unable to attend class on time due to teacher’s equipment or network problems, we will arrange make up lessons or add extra time for the class. If students fail to log on to zoom or have issues of audio or camera due to their own equipment or network problems, no make up lesson or extra time for the class will be added. It is because the teacher's time has been reserved, we still need to pay the teacher for the reservation of class time.</p>
	</div>
{/if}

<Head title="{$locale === 'hk' ? '守則與指南' : 'GUIDE & RULES'}"/>

<style>
	h2 {
		@apply text-3xl mb-4;
	}
	h3 {
		@apply text-amber-700 text-2xl mb-2 mt-6;
	}
	p, li {
		@apply mb-4 text-gray-700 leading-relaxed;
	}
</style>